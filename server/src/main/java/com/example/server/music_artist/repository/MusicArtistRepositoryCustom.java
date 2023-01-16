package com.example.server.music_artist.repository;

import com.example.server.music_artist.domain.MusicArtist;

import java.util.List;

public interface MusicArtistRepositoryCustom {

    MusicArtist findByMusicAndArtist(String videoId, String artistId);

    List<MusicArtist> findAllByMusicIdList(List<Long> idList);
}
