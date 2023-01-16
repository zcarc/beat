package com.example.server.auth;

import com.example.server.auth.dto.Session;
import com.example.server.auth.dto.ValidResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;


@RequiredArgsConstructor
@Component
public class AuthProvider {

    private final SessionManager sessionManager;

    @Transactional
    public ResponseEntity<ValidResponse> validSession(HttpServletRequest request) {

        Session session = sessionManager.getSessionValue(request);
        if (session == null) {
            return ResponseEntity.badRequest().body(new ValidResponse(false));
        }

        return ResponseEntity.ok(new ValidResponse(session.getName(), session.getEmail(), true));
    }
}
