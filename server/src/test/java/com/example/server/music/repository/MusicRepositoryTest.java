package com.example.server.music.repository;

import com.example.server.album.domain.Album;
import com.example.server.album.repository.AlbumRepository;
import com.example.server.music.domain.Music;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

@Transactional
@SpringBootTest
class MusicRepositoryTest {

    @Autowired
    MusicRepository musicRepository;

    @Autowired
    AlbumRepository albumRepository;

    @Test
    @DisplayName(value = "없는 뮤직을 찾으면 빈 값이 된다")
    void findByVideoIdEmpty() {

        assertThat(musicRepository.findByMusicVideoId("videoId")
                .map(Music::getMusicVideoId)
                .orElseGet(() -> ""))
                .isEmpty();
    }

    @Test
    @DisplayName(value = "뮤직을 저장하고 찾은 유튜브 앨범 아이디가 일치한다")
    void findByVideoId() {

        Album album = new Album("youtubeAlbumId", "someTitle");
        albumRepository.saveCustom(album);

        String videoId = "videoId";

        Music music = new Music(videoId, album, "title");
        musicRepository.saveCustom(music);

        Assertions.assertThat(musicRepository.findByMusicVideoId(videoId)
                        .map(Music::getMusicVideoId)
                        .orElseGet(() -> ""))
                .isEqualTo(videoId);

    }

}