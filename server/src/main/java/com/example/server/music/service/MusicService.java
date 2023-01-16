package com.example.server.music.service;

import com.example.server.album.domain.Album;
import com.example.server.music.domain.Music;
import com.example.server.music.repository.MusicRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class MusicService {

    private final MusicRepository musicRepository;

    @Transactional
    public Long create(Album album, String musicVideoId, String title) {
        Long findMusicId = musicRepository.findByMusicVideoId(musicVideoId).map(Music::getId).orElse(null);
        if (findMusicId == null) {
            Music music = new Music(musicVideoId, album, title);
            musicRepository.save(music);
            return music.getId();
        }
        return findMusicId;
    }

    public Music findByMusicVideoId(String musicVideoId) {
        return musicRepository.findByMusicVideoId(musicVideoId).orElse(null);
    }

    public Music findById(Long id) {
        return musicRepository.findById(id).orElse(null);
    }

}
