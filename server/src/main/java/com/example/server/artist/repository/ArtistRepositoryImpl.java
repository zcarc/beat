package com.example.server.artist.repository;

import com.example.server.artist.domain.Artist;
import lombok.RequiredArgsConstructor;

import javax.persistence.EntityManager;

@RequiredArgsConstructor
public class ArtistRepositoryImpl implements ArtistRepositoryCustom {

    private final EntityManager em;

    @Override
    public void saveCustom(Artist artist) {
        em.persist(artist);
    }
}
