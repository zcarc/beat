package com.example.server.playlist.dto.playlist_request;

import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class PlaylistThumbnailRequest {

    private String url;
    private int width;
    private int height;
}
