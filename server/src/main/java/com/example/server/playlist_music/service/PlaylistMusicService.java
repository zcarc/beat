package com.example.server.playlist_music.service;

import com.example.server.music.domain.Music;
import com.example.server.playlist.domain.Playlist;
import com.example.server.playlist_music.domain.PlaylistMusic;
import com.example.server.playlist_music.repository.PlaylistMusicRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class PlaylistMusicService {

    private final PlaylistMusicRepository playlistMusicRepository;

    public PlaylistMusic findById(Long id) {
        return playlistMusicRepository.findById(id).orElse(null);
    }

    public List<PlaylistMusic> findAllByPlaylist(Playlist playlist) {
        return playlistMusicRepository.findAllByPlaylist(playlist);
    }

    public List<Music> findAllByPlaylistCustom(Playlist playlist) {
        return playlistMusicRepository.findAllByPlaylistCustom(playlist);
    }


    public Long create(Playlist playlist, Music music) {

        Long findPlaylistMusicId = playlistMusicRepository.findByPlaylistAndMusic(playlist, music).map(PlaylistMusic::getId).orElse(null);

        if (findPlaylistMusicId == null) {
            playlist.increaseCount();
            PlaylistMusic newPlaylistMusic = new PlaylistMusic(playlist, music);
            playlistMusicRepository.save(newPlaylistMusic);
            return newPlaylistMusic.getId();
        }

        return 0L;
    }
}
