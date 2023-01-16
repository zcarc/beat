package com.example.server.artist.repository;

import com.example.server.artist.domain.Artist;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

@Transactional
@SpringBootTest
class ArtistRepositoryTest {

    @Autowired
    ArtistRepository artistRepository;

    @Test
    @DisplayName(value = "아티스트를 저장한다")
    void saveCustom() {

        String youtubeArtistId = "youtubeArtistId";

        Artist artist = new Artist(youtubeArtistId, "name");
        artistRepository.saveCustom(artist);

        Assertions.assertThat(
                        artistRepository.findByArtistYoutubeId(youtubeArtistId)
                                .map(Artist::getArtistYoutubeId)
                                .orElse("")
                )
                .isEqualTo(youtubeArtistId);
    }

    @Test
    @DisplayName(value = "없는 아티스트를 찾으면 빈 값이 된다")
    void findByYoutubeArtistIdEmpty() {

        assertThat(artistRepository.findByArtistYoutubeId("youtubeArtistId")
                .map(Artist::getArtistYoutubeId)
                .orElseGet(() -> ""))
                .isEmpty();
    }

    @Test
    @DisplayName(value = "아티스트를 저장하고 찾은 유튜브 아티스트 아이디가 일치한다")
    void findByYoutubeArtistId() {

        String youtubeArtistId = "youtubeArtistId";

        Artist album = new Artist(youtubeArtistId, "name");
        artistRepository.saveCustom(album);

        Assertions.assertThat(artistRepository.findByArtistYoutubeId(youtubeArtistId)
                        .map(Artist::getArtistYoutubeId)
                        .orElseGet(() -> ""))
                .isEqualTo(youtubeArtistId);
    }
}