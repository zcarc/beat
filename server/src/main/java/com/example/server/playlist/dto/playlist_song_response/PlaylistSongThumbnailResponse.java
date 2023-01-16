package com.example.server.playlist.dto.playlist_song_response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PlaylistSongThumbnailResponse {

    private String url;
    private int width;
    private int height;
}
