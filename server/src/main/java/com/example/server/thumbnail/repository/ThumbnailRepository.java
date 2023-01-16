package com.example.server.thumbnail.repository;

import com.example.server.thumbnail.domain.Thumbnail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ThumbnailRepository extends JpaRepository<Thumbnail, Long>, ThumbnailRepositoryCustom {

    Optional<Thumbnail> findByImageUrl(String imageUrl);
}
