package com.example.server.thumbnail.domain;

import com.example.server.album.domain.Album;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Thumbnail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "thumbnail_id")
    private Long id;

    @Column(nullable = false)
    private String imageUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "album_id")
    private Album album;

    @Column(nullable = false)
    private Integer width;

    @Column(nullable = false)
    private Integer height;

    public Thumbnail(String imageUrl, Album album, Integer width, Integer height) {
        this.imageUrl = imageUrl;
        this.album = album;
        this.width = width;
        this.height = height;
    }

    public void addAlbum(Album album) {
        this.album = album;
    }
}
