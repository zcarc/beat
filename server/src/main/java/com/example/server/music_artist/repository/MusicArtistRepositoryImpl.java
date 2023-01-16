package com.example.server.music_artist.repository;

import com.example.server.music_artist.domain.MusicArtist;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.example.server.artist.domain.QArtist.artist;
import static com.example.server.music.domain.QMusic.music;
import static com.example.server.music_artist.domain.QMusicArtist.musicArtist;

@RequiredArgsConstructor
public class MusicArtistRepositoryImpl implements MusicArtistRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public MusicArtist findByMusicAndArtist(String videoId, String artistYoutubeId) {
        return queryFactory.selectFrom(musicArtist)
                .join(musicArtist.music, music).fetchJoin()
                .join(musicArtist.artist, artist).fetchJoin()
                .where(
                        music.musicVideoId.eq(videoId),
                        artist.artistYoutubeId.eq(artistYoutubeId)
                )
                .fetchOne();
    }

    @Override
    public List<MusicArtist> findAllByMusicIdList(List<Long> musicIdList) {
        return queryFactory.selectFrom(musicArtist)
                .join(musicArtist.music, music).fetchJoin()
                .join(musicArtist.artist).fetchJoin()
                .join(music.album).fetchJoin()
                .where(music.id.in(musicIdList))
                .fetch();
    }

}
