package com.example.server.playlist_music.repository;

import com.example.server.member.domain.Member;
import com.example.server.member.repository.MemberRepository;
import com.example.server.playlist.domain.Playlist;
import com.example.server.playlist.repository.PlaylistRepository;
import com.example.server.playlist_music.domain.PlaylistMusic;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@SpringBootTest
class PlaylistMusicRepositoryTest {

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    PlaylistRepository playlistRepository;

    @Autowired
    PlaylistMusicRepository playlistMusicRepository;

    @DisplayName(value = "플레이리스트로 모든 플레이리스트_뮤직을 조회한다")
    @Test
    void findAllByPlaylist() {

        String email = "test@test.com";
        Member member = new Member("test", email);
        memberRepository.save(member);

        Playlist playlist = new Playlist(member, "testTitle", "", 10);
        playlistRepository.save(playlist);

        List<PlaylistMusic> playlistMusics = playlistMusicRepository.findAllByPlaylist(playlist);

    }
}