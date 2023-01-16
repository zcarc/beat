package com.example.server.thumbnail.repository;

import com.example.server.thumbnail.domain.Thumbnail;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import javax.persistence.EntityManager;
import java.util.List;

import static com.example.server.thumbnail.domain.QThumbnail.thumbnail;

@RequiredArgsConstructor
public class ThumbnailRepositoryImpl implements ThumbnailRepositoryCustom {
    private final EntityManager em;
    private final JPAQueryFactory queryFactory;

    @Override
    public void saveCustom(Thumbnail thumbnail) {
        em.persist(thumbnail);
    }

    @Override
    public List<Thumbnail> findAllByAlbumIdList(List<Long> idList) {
        return queryFactory.selectFrom(thumbnail)
                .where(thumbnail.album.id.in(idList))
                .fetch();
    }
}
