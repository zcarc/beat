package com.example.server.album.repository;

import com.example.server.album.domain.Album;
import lombok.RequiredArgsConstructor;

import javax.persistence.EntityManager;

@RequiredArgsConstructor
public class AlbumRepositoryImpl implements AlbumRepositoryCustom {

    private final EntityManager em;

    @Override
    public void saveCustom(Album album) {
        em.persist(album);
    }
}
