package com.example.server.playlist_music.repository;

import com.example.server.music.domain.Music;
import com.example.server.playlist.domain.Playlist;

import java.util.List;

public interface PlaylistMusicRepositoryCustom {

    List<Music> findAllByPlaylistCustom(Playlist playlist);

    Long deleteByPlaylistIdAndMusicId(Long playlistId, Long musicId);
}
