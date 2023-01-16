package com.example.server.music.domain;

import com.example.server.album.domain.Album;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Music {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "music_id")
    private Long id;

    @Column(nullable = false)
    private String musicVideoId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "album_id")
    private Album album;

    @Column(nullable = false)
    private String title;

    public Music(String musicVideoId, Album album, String title) {
        this.musicVideoId = musicVideoId;
        this.album = album;
        this.title = title;
    }
}
