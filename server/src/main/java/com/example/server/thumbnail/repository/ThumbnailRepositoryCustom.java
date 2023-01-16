package com.example.server.thumbnail.repository;

import com.example.server.thumbnail.domain.Thumbnail;

import java.util.List;

public interface ThumbnailRepositoryCustom {

    void saveCustom(Thumbnail thumbnail);

    List<Thumbnail> findAllByAlbumIdList(List<Long> idList);
}
