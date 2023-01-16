package com.example.server.playlist.dto.playlist_song_response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PlaylistSongResponse {

    private PlaylistSongMusicResponse music;
    private PlaylistSongArtistResponse artists;
    private PlaylistSongAlbumResponse album;
    private PlaylistSongThumbnailResponse thumbnails;
}
