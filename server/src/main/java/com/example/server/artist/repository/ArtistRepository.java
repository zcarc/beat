package com.example.server.artist.repository;

import com.example.server.artist.domain.Artist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ArtistRepository extends JpaRepository<Artist, Long>, ArtistRepositoryCustom {

    Optional<Artist> findByArtistYoutubeId(String artistYoutubeId);
}
