package com.example.server.playlist.service;

import com.example.server.member.domain.Member;
import com.example.server.member.repository.MemberRepository;
import com.example.server.playlist.dto.PlaylistCreateRequest;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@SpringBootTest
class PlaylistServiceTest {

    @Autowired
    PlaylistService playlistService;

    @Autowired
    MemberRepository memberRepository;

    @DisplayName(value = "플레이리스트를 생성한다")
    @Test
    void createPlaylist() {
        String email = "test@test.com";
        Member member = new Member("test", email);
        memberRepository.save(member);
        PlaylistCreateRequest playlistCreateRequest = new PlaylistCreateRequest("title", "desc", email);
        Long playlist = playlistService.createPlaylist(playlistCreateRequest);
    }
}