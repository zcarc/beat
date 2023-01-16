package com.example.server.music.dto;

import com.example.server.album.domain.Album;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class MusicDto {

    private Long id;

    private String musicVideoId;

    private Album album;

    private String title;
}
