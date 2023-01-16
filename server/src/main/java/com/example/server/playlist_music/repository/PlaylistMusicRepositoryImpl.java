package com.example.server.playlist_music.repository;

import com.example.server.music.domain.Music;
import com.example.server.playlist.domain.Playlist;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.example.server.music.domain.QMusic.music;
import static com.example.server.playlist_music.domain.QPlaylistMusic.playlistMusic;

@RequiredArgsConstructor
public class PlaylistMusicRepositoryImpl implements PlaylistMusicRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public List<Music> findAllByPlaylistCustom(Playlist playlist) {
        return queryFactory
                .select(music)
                .from(playlistMusic)
                .join(playlistMusic.music, music)
                .where(playlistMusic.playlist.eq(playlist))
                .fetch();
    }

    @Override
    public Long deleteByPlaylistIdAndMusicId(Long playlistId, Long musicId) {
        return queryFactory
                .delete(playlistMusic)
                .where(
                        playlistMusic.playlist.id.eq(playlistId),
                        playlistMusic.music.id.eq(musicId)
                )
                .execute();
    }
}
