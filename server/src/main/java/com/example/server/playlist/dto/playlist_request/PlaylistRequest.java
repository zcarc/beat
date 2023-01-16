package com.example.server.playlist.dto.playlist_request;

import lombok.Getter;
import lombok.ToString;

import java.util.List;

@ToString
@Getter
public class PlaylistRequest {
    private Long playlistId;
    private String title;
    private String videoId;
    private List<PlaylistArtistRequest> artists;
    private List<PlaylistThumbnailRequest> thumbnails;
    private PlaylistAlbumRequest album;

}
