package com.example.server.playlist.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PlaylistCreateRequest {

    private String title;
    private String description;
    private String email;
}
