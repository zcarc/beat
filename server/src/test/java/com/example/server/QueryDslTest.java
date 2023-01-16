package com.example.server;

import com.example.server.member.domain.Member;
import com.example.server.member.domain.QMember;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

@SpringBootTest
@Transactional
public class QueryDslTest {

    @Autowired
    EntityManager em;

    @Test
    @DisplayName(value = "멤버를 생성하고 조회한 멤버 이름과 일치한다")
    void test() {
        Member member = Member.builder()
                .name("test")
                .email("test@gmail.com")
                .build();

        em.persist(member);

        JPAQueryFactory query = new JPAQueryFactory(em);
        QMember aMember = new QMember("a");

        Member member1 = query
                .selectFrom(aMember)
                .where(aMember.name.eq("test"))
                .fetchOne();


        Assertions.assertThat(member1.getName()).isEqualTo(member.getName());
    }
}
