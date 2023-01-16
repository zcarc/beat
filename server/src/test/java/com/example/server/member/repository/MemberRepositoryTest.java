package com.example.server.member.repository;

import com.example.server.member.domain.Member;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@SpringBootTest
class MemberRepositoryTest {

    @Autowired
    MemberRepository memberRepository;

    @Test
    @DisplayName(value = "멤버를 저장한다")
    void save() {
        String email = "test@gmail.com";
        Member member = new Member("test", email);
        Member save = memberRepository.save(member);
        Assertions.assertThat(save.getEmail())
                .isEqualTo(email);
    }

    @Test
    @DisplayName(value = "멤버를 저장하고 찾은 멤버 이메일이 일치한다")
    void findByEmail() {
        String email = "test@gmail.com";
        Member member = new Member("test", email);
        memberRepository.save(member);
        Assertions.assertThat(memberRepository.findByEmail(email).map(Member::getEmail).orElse(""))
                .isEqualTo(email);
    }
}