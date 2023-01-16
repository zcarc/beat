package com.example.server.artist.service;

import com.example.server.artist.domain.Artist;
import com.example.server.artist.repository.ArtistRepository;
import com.example.server.playlist.dto.playlist_request.PlaylistArtistRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class ArtistService {
    private final ArtistRepository artistRepository;

    @Transactional
    public List<Long> create(List<PlaylistArtistRequest> artistRequestList) {
        List<Long> ids = new ArrayList<>();

        for (PlaylistArtistRequest artist : artistRequestList) {
            String youtubeArtistId = artist.getId();
            Long findArtistId = artistRepository.findByArtistYoutubeId(youtubeArtistId).map(Artist::getId).orElse(null);
            if (findArtistId == null) {
                String artistName = artist.getName();
                Artist newArtist = new Artist(youtubeArtistId, artistName);
                artistRepository.save(newArtist);
                ids.add(newArtist.getId());
            }
            ids.add(findArtistId);
        }
        return ids;
    }

    public Artist findById(Long id) {
        return artistRepository.findById(id).orElse(null);
    }

    public List<Artist> findAllById(List<Long> ids) {
        return new ArrayList<>(artistRepository.findAllById(ids));
    }

}
