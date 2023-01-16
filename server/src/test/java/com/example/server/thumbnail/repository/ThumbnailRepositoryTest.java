package com.example.server.thumbnail.repository;

import com.example.server.album.domain.Album;
import com.example.server.album.repository.AlbumRepository;
import com.example.server.thumbnail.domain.Thumbnail;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;


@Transactional
@SpringBootTest
class ThumbnailRepositoryTest {

    @Autowired
    ThumbnailRepository thumbnailRepository;

    @Autowired
    AlbumRepository albumRepository;

    @Test
    @DisplayName(value = "없는 썸네일을 찾으면 빈 값이 된다")
    void findByImageUrlEmpty() {

        assertThat(thumbnailRepository.findByImageUrl("imageUrl")
                .map(Thumbnail::getImageUrl)
                .orElseGet(() -> ""))
                .isEmpty();
    }

    @Test
    @DisplayName(value = "썸네일을 저장하고 찾은 썸네일_유튜브_이미지가 일치한다")
    void findByImageUrl() {

        String imageUrl = "imageUrl";

        Album album = new Album("youtubeAlbumId", "someTitle");
        albumRepository.saveCustom(album);

        Thumbnail thumbnail = new Thumbnail(imageUrl, album, 60, 60);
        thumbnailRepository.saveCustom(thumbnail);

        Assertions.assertThat(thumbnailRepository.findByImageUrl((imageUrl))
                        .map(Thumbnail::getImageUrl)
                        .orElseGet(() -> ""))
                .isEqualTo(imageUrl);
    }
}