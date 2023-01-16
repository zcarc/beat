package com.example.server.music_artist.repository;

import com.example.server.artist.domain.Artist;
import com.example.server.music.domain.Music;
import com.example.server.music_artist.domain.MusicArtist;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MusicArtistRepository extends JpaRepository<MusicArtist, Long>, MusicArtistRepositoryCustom {

    @EntityGraph(attributePaths = {"music", "artist"})
    List<MusicArtist> findAll();

    @EntityGraph(attributePaths = {"music", "artist"})
    Optional<MusicArtist> findByMusicAndArtist(Music music, Artist artist);


}
