package com.example.server.auth;

import com.example.server.auth.dto.LoginRequest;
import com.example.server.auth.dto.Session;
import org.springframework.stereotype.Component;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Arrays;
import java.util.Optional;
import java.util.UUID;

import static com.example.server.exception.ExceptionConstants.NOT_FOUND_COOKIE;
import static com.example.server.exception.ExceptionConstants.NOT_FOUND_SESSION;

@Component
public class SessionManager {

    public static final String sessionCookieName = "SESSION_COOKIE";

    public void createSessionAndCookie(HttpServletRequest request, HttpServletResponse response, LoginRequest loginRequest) {
        String sessionId = UUID.randomUUID().toString();
        request.getSession().setAttribute(sessionId, new Session(loginRequest.getName(), loginRequest.getEmail()));

        Cookie cookie = new Cookie(sessionCookieName, sessionId);
        cookie.setHttpOnly(true);
        response.addCookie(cookie);
    }

    public Session getSessionValue(HttpServletRequest request) {
        Cookie cookie = findCookie(request);
        if (cookie == null) {
            return null;
        }
        return Optional.ofNullable((Session) request.getSession()
                        .getAttribute(cookie.getValue()))
                .orElseThrow(() -> new RuntimeException(NOT_FOUND_SESSION));
    }

    public boolean expireSessionAndCookie(HttpServletRequest request, HttpServletResponse response) {
        Cookie cookie = findCookie(request);
        if (cookie != null) {
            HttpSession session = request.getSession();
            String cookieValue = cookie.getValue();
            try {
                session.removeAttribute(cookieValue);
                Cookie removeCookie = new Cookie(sessionCookieName, null);
                removeCookie.setPath("/");
                removeCookie.setMaxAge(0);
                response.addCookie(removeCookie);
                return true;
            } catch (Exception e) {
                throw new RuntimeException(NOT_FOUND_SESSION);
            }
        }
        return false;
    }

    public Cookie findCookie(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies == null) {
            return null;
        }
        return Arrays.stream(cookies)
                .filter(cookie -> cookie.getName().equals(sessionCookieName))
                .findAny()
                .orElseThrow(() -> new RuntimeException(NOT_FOUND_COOKIE));
    }
}
