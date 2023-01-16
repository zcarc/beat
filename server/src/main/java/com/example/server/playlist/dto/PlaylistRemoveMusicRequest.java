package com.example.server.playlist.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PlaylistRemoveMusicRequest {

    private Long playlistId;
    private String musicVideoId;
}
