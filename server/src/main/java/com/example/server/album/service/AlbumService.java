package com.example.server.album.service;

import com.example.server.album.domain.Album;
import com.example.server.album.repository.AlbumRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class AlbumService {

    private final AlbumRepository albumRepository;

    @Transactional
    public Long create(String albumYoutubeId, String title) {
        Long findAlbumId = albumRepository.findByAlbumYoutubeId(albumYoutubeId).map(Album::getId).orElse(null);
        if (findAlbumId == null) {
            Album album = new Album(albumYoutubeId, title);
            albumRepository.save(album);
            return album.getId();
        }
        return findAlbumId;
    }

    public Album findByAlbumYoutubeId(String albumYoutubeId) {
        return albumRepository.findByAlbumYoutubeId(albumYoutubeId).orElse(null);
    }

    public Album findById(Long id) {
        return albumRepository.findById(id).orElse(null);
    }
}
