package com.example.server.album.repository;

import com.example.server.album.domain.Album;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;


@Transactional
@SpringBootTest
class AlbumRepositoryTest {

    @Autowired
    AlbumRepository albumRepository;

    @Test
    @DisplayName(value = "앨범을 저장한다")
    void saveCustom() {

        String albumYoutubeAlbumId = "albumYoutubeAlbumId";

        Album album = new Album(albumYoutubeAlbumId, "someTitle");
        albumRepository.saveCustom(album);

        Assertions.assertThat(
                        albumRepository.findByAlbumYoutubeId(albumYoutubeAlbumId)
                                .map(Album::getAlbumYoutubeId)
                                .orElse("")
                )
                .isEqualTo(albumYoutubeAlbumId);
    }

    @Test
    @DisplayName(value = "없는 앨범을 찾으면 빈 값이 된다")
    void findByYoutubeAlbumIdEmpty() {

        assertThat(albumRepository.findByAlbumYoutubeId("youtubeAlbumId")
                .map(Album::getAlbumYoutubeId)
                .orElseGet(() -> ""))
                .isEmpty();
    }

    @Test
    @DisplayName(value = "앨범을 저장하고 찾은 유튜브 앨범 아이디가 일치한다")
    void findByYoutubeAlbumId() {

        String youtubeAlbumId = "youtubeAlbumId";

        Album album = new Album(youtubeAlbumId, "someTitle");
        albumRepository.saveCustom(album);

        assertThat(albumRepository.findByAlbumYoutubeId((youtubeAlbumId))
                .map(Album::getAlbumYoutubeId)
                .orElseGet(() -> ""))
                .isEqualTo(youtubeAlbumId);
    }

    @Test
    @DisplayName(value = "앨범을 저장하고 찾은 제목이 일치한다")
    void findTitle() {

        Album album = new Album("youtubeAlbumId", "someTitle");
        albumRepository.saveCustom(album);

        String title = "someTitle";

        assertThat(albumRepository.findByTitle((title))
                .map(Album::getTitle)
                .orElseGet(() -> ""))
                .isEqualTo(title);
    }
}