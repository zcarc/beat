package com.example.server.music_artist.repository;

import com.example.server.album.domain.Album;
import com.example.server.album.repository.AlbumRepository;
import com.example.server.artist.domain.Artist;
import com.example.server.artist.repository.ArtistRepository;
import com.example.server.music.domain.Music;
import com.example.server.music.repository.MusicRepository;
import com.example.server.music_artist.domain.MusicArtist;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@Transactional
@SpringBootTest
class MusicArtistRepositoryTest {

    @Autowired
    MusicArtistRepository musicArtistRepository;

    @Autowired
    MusicRepository musicRepository;

    @Autowired
    ArtistRepository artistRepository;

    @Autowired
    AlbumRepository albumRepository;

    @Test
    @DisplayName(value = "뮤직_아티스트를 저장하고 찾은 뮤직_비디오_아이디와 아티스트_유튜브_아이디가 일치한다")
    void findAll() {

        String videoId = "videoId";
        String youtubeArtistId = "youtubeArtistId";

        Album album = new Album("youtubeAlbumId", "someTitle");
        albumRepository.saveCustom(album);

        Music music = new Music(videoId, album, "title");
        musicRepository.saveCustom(music);

        Artist artist = new Artist(youtubeArtistId, "name");
        artistRepository.saveCustom(artist);

        MusicArtist musicArtist = new MusicArtist(music, artist);
        musicArtistRepository.save(musicArtist);

        List<MusicArtist> all = musicArtistRepository.findAll();

        MusicArtist resMusicArtist = all.get(0);

        assertThat(resMusicArtist.getMusic().getMusicVideoId()).isEqualTo(videoId);
        assertThat(resMusicArtist.getArtist().getArtistYoutubeId()).isEqualTo(youtubeArtistId);
    }

    @Test
    @DisplayName(value = "뮤직_아티스트에서 존재하지 않는 비디오_아이디와 앨범_아이디를 검색하면 비어있다")
    void findByMusicAndArtist() {
        String videoId = "videoId";
        String albumId = "albumId";
        MusicArtist findMusicArtist = musicArtistRepository.findByMusicAndArtist(videoId, albumId);

        assertThat(findMusicArtist).isEqualTo(null);
    }


    @Test
    @DisplayName(value = "뮤직_아티스트를 뮤직_아이디_리스트로 조회한다")
    void findAllByMusic() {

        List<Long> musicIdList = Arrays.asList(1L, 2L, 3L, 4L, 5L);
        List<MusicArtist> musicArtistList = musicArtistRepository.findAllByMusicIdList(musicIdList);

    }


}

// video id V6TEcoNUmc8
// album id MPREb_ldEii5fZiix
// artist id UCxOqS3cYg4FaHbobICo7nFQ
// 썸네일 url https://lh3.googleusercontent.com/UWM-x77xhcEEAK8tKICtlDSxsYedoFxQhdiDPzW-Ww59DWs7rDQpD_idJQ6h5YEJruURgpEr1O-0oq5Y=w60-h60-l90-rj