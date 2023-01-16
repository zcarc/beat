package com.example.server.thumbnail.service;

import com.example.server.album.domain.Album;
import com.example.server.playlist.dto.playlist_request.PlaylistThumbnailRequest;
import com.example.server.thumbnail.domain.Thumbnail;
import com.example.server.thumbnail.repository.ThumbnailRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class ThumbnailService {

    private final ThumbnailRepository thumbnailRepository;

    public List<Thumbnail> findAllByAlbumIdList(List<Long> idList) {
        return thumbnailRepository.findAllByAlbumIdList(idList);
    }

    @Transactional
    public List<Long> create(Album album, List<PlaylistThumbnailRequest> playlistThumbnailRequests) {

        List<Long> ids = new ArrayList<>();

        for (PlaylistThumbnailRequest thumbnail : playlistThumbnailRequests) {
            Long findThumbnailId = thumbnailRepository.findByImageUrl(thumbnail.getUrl()).map(Thumbnail::getId).orElse(null);
            if (findThumbnailId == null) {
                Thumbnail newThumbnail = new Thumbnail(thumbnail.getUrl(), album, thumbnail.getWidth(), thumbnail.getHeight());
                newThumbnail.addAlbum(album);
                thumbnailRepository.save(newThumbnail);
                ids.add(newThumbnail.getId());
            }
            ids.add(findThumbnailId);
        }

        return ids;
    }

}
