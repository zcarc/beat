package com.example.server.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ValidResponse {

    private String name;
    private String email;
    private boolean isLogin;

    public ValidResponse(boolean isLogin) {
        this.isLogin = isLogin;
    }
}
