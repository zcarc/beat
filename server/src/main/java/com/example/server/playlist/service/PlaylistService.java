package com.example.server.playlist.service;

import com.example.server.album.domain.Album;
import com.example.server.album.service.AlbumService;
import com.example.server.artist.domain.Artist;
import com.example.server.artist.service.ArtistService;
import com.example.server.member.domain.Member;
import com.example.server.member.service.MemberService;
import com.example.server.music.domain.Music;
import com.example.server.music.service.MusicService;
import com.example.server.music_artist.domain.MusicArtist;
import com.example.server.music_artist.service.MusicArtistService;
import com.example.server.playlist.domain.Playlist;
import com.example.server.playlist.dto.PlaylistCreateRequest;
import com.example.server.playlist.dto.PlaylistRemoveMusicRequest;
import com.example.server.playlist.dto.PlaylistResponse;
import com.example.server.playlist.dto.playlist_request.PlaylistArtistRequest;
import com.example.server.playlist.dto.playlist_request.PlaylistRequest;
import com.example.server.playlist.dto.playlist_request.PlaylistThumbnailRequest;
import com.example.server.playlist.dto.playlist_song_response.*;
import com.example.server.playlist.repository.PlaylistRepository;
import com.example.server.playlist_music.repository.PlaylistMusicRepository;
import com.example.server.playlist_music.service.PlaylistMusicService;
import com.example.server.thumbnail.domain.Thumbnail;
import com.example.server.thumbnail.service.ThumbnailService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static com.example.server.exception.ExceptionConstants.NOT_FOUND_MEMBER;
import static com.example.server.exception.ExceptionConstants.NOT_FOUND_PLAYLIST;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class PlaylistService {

    private final PlaylistRepository playlistRepository;
    private final PlaylistMusicRepository playlistMusicRepository;
    private final MemberService memberService;
    private final AlbumService albumService;
    private final ThumbnailService thumbnailService;
    private final MusicService musicService;
    private final ArtistService artistService;
    private final MusicArtistService musicArtistService;
    private final PlaylistMusicService playlistMusicService;

    public Playlist findById(Long id) {
        return playlistRepository.findById(id).orElseThrow(() -> new RuntimeException(NOT_FOUND_PLAYLIST));
    }

    public List<Playlist> findAllByMemberEmail(String email) {
        Member member = memberService.findByEmail(email).orElseThrow(() -> new RuntimeException(NOT_FOUND_MEMBER));
        return playlistRepository.findAllByMember(member);
    }

    public List<PlaylistResponse> toResponseList(List<Playlist> playlistList) {
        List<PlaylistResponse> responses = new ArrayList<>();
        for (Playlist playlist : playlistList) {
            responses.add(new PlaylistResponse(playlist.getId(), playlist.getTitle(), playlist.getDescription(), playlist.getCount()));
        }
        return responses;
    }

    public PlaylistSongPlaylistResponse findAllMusic(Long playlistId) {

        Playlist findPlaylist = findById(playlistId);
        List<Music> musicList = playlistMusicService.findAllByPlaylistCustom(findPlaylist);
        List<Long> musicIdList = musicList.stream().map(Music::getId).collect(Collectors.toList());
        List<MusicArtist> musicArtistList = musicArtistService.findAllByMusicIdList(musicIdList);
        List<Artist> artistList = musicArtistList.stream().map(MusicArtist::getArtist).collect(Collectors.toList());
        List<Album> albumList = musicArtistList.stream().map(MusicArtist::getMusic).collect(Collectors.toList()).stream()
                .map(Music::getAlbum).collect(Collectors.toList());
        List<Long> albumIdList = albumList.stream().map(Album::getId).collect(Collectors.toList());
        List<Thumbnail> thumbnailList = thumbnailService.findAllByAlbumIdList(albumIdList);

        Map<Long, PlaylistSongMusicResponse> musicResponseMap = musicList.stream().collect(Collectors
                .toMap(Music::getId, music -> new PlaylistSongMusicResponse(music.getTitle(), music.getMusicVideoId())));
        Map<Long, PlaylistSongArtistResponse> artistResponseMap = artistList.stream().collect(Collectors
                .toMap(Artist::getId, artist -> new PlaylistSongArtistResponse(artist.getName(), artist.getArtistYoutubeId()), (k1, k2) -> k1));
        Map<Long, PlaylistSongAlbumResponse> albumResponseMap = albumList.stream().collect(Collectors.
                toMap(Album::getId, album -> new PlaylistSongAlbumResponse(album.getTitle(), album.getAlbumYoutubeId()), (k1, k2) -> k1));
        Map<Long, PlaylistSongThumbnailResponse> thumbnailResponseMap = thumbnailList.stream().collect(Collectors
                .toMap(thumbnail -> thumbnail.getAlbum().getId(),
                        thumbnail -> new PlaylistSongThumbnailResponse(thumbnail.getImageUrl(), thumbnail.getWidth(), thumbnail.getHeight()), (k1, k2) -> k1));

        List<PlaylistSongResponse> songResponseList = new ArrayList<>();
        for (MusicArtist musicArtist : musicArtistList) {
            PlaylistSongMusicResponse musicResponse = musicResponseMap.get(musicArtist.getMusic().getId());
            PlaylistSongArtistResponse artistResponse = artistResponseMap.get(musicArtist.getArtist().getId());
            PlaylistSongAlbumResponse albumResponse = albumResponseMap.get(musicArtist.getMusic().getAlbum().getId());
            PlaylistSongThumbnailResponse thumbnailResponse = thumbnailResponseMap.get(musicArtist.getMusic().getAlbum().getId());
            PlaylistSongResponse playlistSongResponse = new PlaylistSongResponse(musicResponse, artistResponse, albumResponse, thumbnailResponse);
            songResponseList.add(playlistSongResponse);
        }

        return new PlaylistSongPlaylistResponse(findPlaylist.getId(), findPlaylist.getTitle(), findPlaylist.getDescription(), findPlaylist.getCount(), songResponseList);
    }

    @Transactional
    public Long createPlaylist(PlaylistCreateRequest createRequest) {
        String email = createRequest.getEmail();
        Member member = memberService.findByEmail(email).orElseThrow(() -> new RuntimeException(NOT_FOUND_MEMBER));

        String title = createRequest.getTitle();
        String description = createRequest.getDescription();
        Long findPlaylistId = playlistRepository.findByMemberAndTitle(member, title).map(Playlist::getId).orElse(null);
        if (findPlaylistId == null) {
            Playlist newPlaylist = new Playlist(member, title, description, 0);
            playlistRepository.save(newPlaylist);
            return newPlaylist.getId();
        }
        return findPlaylistId;
    }

    @Transactional
    public Long addMusic(PlaylistRequest playlistRequest) {

        // 앨범, 썸네일을 생성한다.
        String albumYoutubeId = playlistRequest.getAlbum().getId();
        String albumTitle = playlistRequest.getAlbum().getName();
        Long albumId = albumService.create(albumYoutubeId, albumTitle);
        Album findAlbum = albumService.findById(albumId);
        List<PlaylistThumbnailRequest> thumbnails = playlistRequest.getThumbnails();
        thumbnailService.create(findAlbum, thumbnails);

        // 뮤직을 생성한다.
        String musicVideoId = playlistRequest.getVideoId();
        String musicTitle = playlistRequest.getTitle();
        Long findMusicId = musicService.create(findAlbum, musicVideoId, musicTitle);

        // 아티스트를 생성한다.
        List<PlaylistArtistRequest> artists = playlistRequest.getArtists();
        List<Long> findArtistIds = artistService.create(artists);

        // 뮤직_아티스트를 생성한다.
        Music findMusic = musicService.findById(findMusicId);
        List<Artist> findArtists = artistService.findAllById(findArtistIds);
        musicArtistService.create(findMusic, findArtists);

        // 플레이리스트_뮤직을 생성한다.
        Playlist findPlaylist = findById(playlistRequest.getPlaylistId());
        return playlistMusicService.create(findPlaylist, findMusic);
    }

    @Transactional
    public long removeMusic(PlaylistRemoveMusicRequest removeMusicRequest) {
        Long musicId = musicService.findByMusicVideoId(removeMusicRequest.getMusicVideoId()).getId();
        Long playlistId = removeMusicRequest.getPlaylistId();
        Playlist playlist = playlistRepository.findById(playlistId).orElseThrow(() -> new RuntimeException(NOT_FOUND_PLAYLIST));
        playlist.decreaseCount();
        return playlistMusicRepository.deleteByPlaylistIdAndMusicId(playlistId, musicId);
    }

}
