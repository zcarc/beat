package com.example.server.playlist_music.repository;

import com.example.server.music.domain.Music;
import com.example.server.playlist.domain.Playlist;
import com.example.server.playlist_music.domain.PlaylistMusic;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PlaylistMusicRepository extends JpaRepository<PlaylistMusic, Long>, PlaylistMusicRepositoryCustom {

    Optional<PlaylistMusic> findByPlaylistAndMusic(Playlist playlist, Music music);

    @EntityGraph(attributePaths = {"music"})
    List<PlaylistMusic> findAllByPlaylist(Playlist playlist);
}
