package com.example.server.playlist.controller;

import com.example.server.playlist.domain.Playlist;
import com.example.server.playlist.dto.PlaylistCreateRequest;
import com.example.server.playlist.dto.PlaylistFindAllRequest;
import com.example.server.playlist.dto.PlaylistRemoveMusicRequest;
import com.example.server.playlist.dto.PlaylistResponse;
import com.example.server.playlist.dto.playlist_request.PlaylistRequest;
import com.example.server.playlist.dto.playlist_song_response.PlaylistSongPlaylistResponse;
import com.example.server.playlist.service.PlaylistService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/playlist")
@RestController
@Controller
public class PlaylistController {
    private final PlaylistService playlistService;

    @GetMapping("/find/all/music/{id}")
    public ResponseEntity<PlaylistSongPlaylistResponse> findMusics(@PathVariable Long id) {
        PlaylistSongPlaylistResponse playlistResponse = playlistService.findAllMusic(id);
        return ResponseEntity.ok().body(playlistResponse);

    }

    @PostMapping("/find/all")
    public ResponseEntity<List<PlaylistResponse>> findAll(@RequestBody PlaylistFindAllRequest playlistFindAllRequest) {
        List<Playlist> playlists = playlistService.findAllByMemberEmail(playlistFindAllRequest.getEmail());
        List<PlaylistResponse> playlistResponses = playlistService.toResponseList(playlists);

        return ResponseEntity.ok().body(playlistResponses);
    }

    @PostMapping("/create")
    public ResponseEntity<String> create(@RequestBody PlaylistCreateRequest playlistCreateRequest) {
        Long playlistId = playlistService.createPlaylist(playlistCreateRequest);
        return ResponseEntity.ok("ok");
    }

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody PlaylistRequest playlistRequest) {

        Long playlistId = playlistService.addMusic(playlistRequest);

        if (playlistId == 0L) {
            return ResponseEntity.ok("duplicated");
        }

        return ResponseEntity.ok("ok");

    }

    @PostMapping("/remove/music")
    public ResponseEntity<Long> removeMusic(@RequestBody PlaylistRemoveMusicRequest removeMusicRequest) {

        Long playlistId = playlistService.removeMusic(removeMusicRequest);

        return ResponseEntity.ok().body(playlistId);

    }
}

