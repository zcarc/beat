package com.example.server.playlist.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PlaylistResponse {

    private Long id;
    private String title;
    private String desc;
    private int cnt;

}
