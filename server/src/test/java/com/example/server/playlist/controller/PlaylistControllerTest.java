package com.example.server.playlist.controller;

import com.example.server.album.service.AlbumService;
import com.example.server.artist.service.ArtistService;
import com.example.server.music.service.MusicService;
import com.example.server.music_artist.service.MusicArtistService;
import com.example.server.thumbnail.service.ThumbnailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@MockBean(MusicArtistService.class)
@MockBean(MusicArtistService.class)
@MockBean(ArtistService.class)
@MockBean(MusicService.class)
@MockBean(ThumbnailService.class)
@MockBean(AlbumService.class)
@WebMvcTest(PlaylistController.class)
class PlaylistControllerTest {

    @Autowired
    private MockMvc mvc;

//    @Test
//    @DisplayName(value = "플레이리스트 추가 시 ok가 리턴된다")
//    void add() throws Exception {
//
//        String ok = "ok";
//
//        String jsonStr = "{\"title\":\"musicTitle\",\"videoId\":\"VVVVVVVV\",\"artists\":[{\"name\":\"artistName\",\"id\":\"DDDDDDDDD\"}],\"thumbnails\":[{\"url\":\"URL\",\"width\":60,\"height\":60}],\"album\":{\"name\":\"albumName\",\"id\":\"IIIIIIIIII\"}}";
//
//        mvc.perform(MockMvcRequestBuilders.post("/playlist/add")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsonStr)
//        )
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andExpect(MockMvcResultMatchers.content().string(ok));
//
//    }
}