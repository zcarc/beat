package com.example.server.member.service;

import com.example.server.member.domain.Member;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@SpringBootTest
class MemberServiceTest {

    @Autowired
    MemberService memberService;

    @Test
    @DisplayName(value = "멤버를 저장하고 찾은 멤버 이메일이 일치한다")
    void createMemberAndFindByEmail() {
        String email = "test@gmail.com";
        Member member = new Member("test", email);
        memberService.create(member);
        Assertions.assertThat(memberService.findByEmail(email).map(Member::getEmail).orElse(""))
                .isEqualTo(email);
    }
}