package com.example.server.exception;

import com.example.server.exception.dto.ExceptionResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler
    public ResponseEntity<ExceptionResponse> handleException(Exception e) {
        String message = e.getMessage();
        log.info("에러 메세지: {}", message);

        return ResponseEntity.status(401).body(new ExceptionResponse(message));
    }
}
