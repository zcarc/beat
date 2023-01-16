package com.example.server.music.repository;

import com.example.server.music.domain.Music;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MusicRepository extends JpaRepository<Music, Long>, MusicRepositoryCustom {

    Optional<Music> findByMusicVideoId(String musicVideoId);

}
