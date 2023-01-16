package com.example.server.member.service;

import com.example.server.auth.SessionManager;
import com.example.server.auth.dto.LoginRequest;
import com.example.server.auth.dto.LoginResponse;
import com.example.server.auth.dto.SignUpRequest;
import com.example.server.auth.dto.SignUpResponse;
import com.example.server.member.domain.Member;
import com.example.server.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Optional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final SessionManager sessionManager;

    public Optional<Member> findByEmail(String email) {
        return memberRepository.findByEmail(email);
    }

    @Transactional
    public void create(Member member) {
        memberRepository.save(member);
    }

    @Transactional
    public ResponseEntity<SignUpResponse> signUp(SignUpRequest signUpRequest) {

        Member findMember = findByEmail(signUpRequest.getEmail()).orElse(null);

        if (findMember != null) {
            return ResponseEntity.badRequest().body(new SignUpResponse("exists"));
        }

        Member newMember = new Member(signUpRequest.getName(), signUpRequest.getEmail());
        create(newMember);

        return ResponseEntity.ok(new SignUpResponse("회원가입이 완료되었습니다."));
    }

    public ResponseEntity<LoginResponse> login(HttpServletRequest request, HttpServletResponse response, LoginRequest loginRequest) {

//        Member findMember = findByEmail(loginRequest.getEmail()).orElse(null);
        Member findMember = memberRepository.findByNameAndEmail(loginRequest.getName(), loginRequest.getEmail()).orElse(null);
        if (findMember == null) {
            return ResponseEntity.badRequest().body(new LoginResponse("not_found"));
        }

        sessionManager.createSessionAndCookie(request, response, loginRequest);

        return ResponseEntity.ok(new LoginResponse(findMember.getName(), findMember.getEmail(), "로그인에 성공했습니다."));

    }

    public ResponseEntity<String> logout(HttpServletRequest request, HttpServletResponse response) {

        if (!sessionManager.expireSessionAndCookie(request, response)) {
            return ResponseEntity.badRequest().body("로그아웃에 실패했습니다.");
        }

        return ResponseEntity.ok("로그아웃에 성공했습니다.");

    }


}
