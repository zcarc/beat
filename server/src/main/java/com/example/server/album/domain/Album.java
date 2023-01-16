package com.example.server.album.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Album {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "album_id")
    private Long id;

    @Column(nullable = false)
    private String albumYoutubeId;

    @Column(nullable = false)
    private String title;

    public Album(String albumYoutubeId, String title) {
        this.albumYoutubeId = albumYoutubeId;
        this.title = title;
    }
}
