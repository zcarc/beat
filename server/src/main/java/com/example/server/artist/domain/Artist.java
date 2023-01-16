package com.example.server.artist.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "artist_id")
    private Long id;

    @Column(nullable = false)
    private String artistYoutubeId;

    @Column(nullable = false)
    private String name;

    public Artist(String artistYoutubeId, String name) {
        this.artistYoutubeId = artistYoutubeId;
        this.name = name;
    }
}
