package com.example.server.music_artist.service;

import com.example.server.artist.domain.Artist;
import com.example.server.music.domain.Music;
import com.example.server.music_artist.domain.MusicArtist;
import com.example.server.music_artist.repository.MusicArtistRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class MusicArtistService {

    private final MusicArtistRepository musicArtistRepository;

    public List<MusicArtist> findAllByMusicIdList(List<Long> musicIdList) {
        return musicArtistRepository.findAllByMusicIdList(musicIdList);
    }

    @Transactional
    public List<Long> create(Music findMusic, List<Artist> findArtists) {

        List<Long> ids = new ArrayList<>();

        for (Artist findArtist : findArtists) {
            Long findMusicArtistId = musicArtistRepository.findByMusicAndArtist(findMusic, findArtist).map(MusicArtist::getId).orElse(null);
            if (findMusicArtistId == null) {
                MusicArtist musicArtist = new MusicArtist(findMusic, findArtist);
                musicArtistRepository.save(musicArtist);
                ids.add(musicArtist.getId());
            }
            ids.add(findMusicArtistId);
        }
        return ids;
    }

}
