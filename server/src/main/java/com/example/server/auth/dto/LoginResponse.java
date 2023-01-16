package com.example.server.auth.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {

    private String name;
    private String email;
    private String text;

    public LoginResponse(String text) {
        this.text = text;
    }
}
