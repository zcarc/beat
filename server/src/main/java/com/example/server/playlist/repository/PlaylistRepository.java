package com.example.server.playlist.repository;


import com.example.server.member.domain.Member;
import com.example.server.playlist.domain.Playlist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PlaylistRepository extends JpaRepository<Playlist, Long> {

    Optional<Playlist> findByTitle(String title);

    Optional<Playlist> findByMemberAndTitle(Member member, String title);

    List<Playlist> findAllByMember(Member member);
}
