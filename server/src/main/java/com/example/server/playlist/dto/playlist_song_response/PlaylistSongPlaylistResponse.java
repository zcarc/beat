package com.example.server.playlist.dto.playlist_song_response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PlaylistSongPlaylistResponse {

    private Long id;
    private String title;

    private String description;

    private int count;

    private List<PlaylistSongResponse> data;
}
