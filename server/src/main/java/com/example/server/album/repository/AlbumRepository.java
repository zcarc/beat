package com.example.server.album.repository;

import com.example.server.album.domain.Album;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AlbumRepository extends JpaRepository<Album, Long>, AlbumRepositoryCustom {

    Optional<Album> findByAlbumYoutubeId(String albumYoutubeId);

    Optional<Album> findByTitle(String title);

}
