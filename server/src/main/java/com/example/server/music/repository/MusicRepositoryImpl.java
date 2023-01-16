package com.example.server.music.repository;

import com.example.server.music.domain.Music;
import lombok.RequiredArgsConstructor;

import javax.persistence.EntityManager;

@RequiredArgsConstructor
public class MusicRepositoryImpl implements MusicRepositoryCustom {

    private final EntityManager em;

    @Override
    public void saveCustom(Music music) {
        em.persist(music);
    }


}
