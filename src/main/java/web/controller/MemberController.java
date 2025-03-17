package web.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import web.model.dto.MemberDto;
import web.service.MemberService;

@RestController // @ResponseBody 포함, restApi 지원하는 컨트롤러 빈 등록
@RequestMapping("/api/member") // 클래스 내 http 매핑 주소의 공통 url 정의할 때 사용
// 개발하는 사람들이 페이지 매핑과 REST 매핑을 구분하기 위한 방법
// 1. 페이지 URL : member/signup
// 2. Rest URL : (1) /member/signup.do : 뒤에 do를 붙이는 경우 (과거)
//               (2) /api/member : 앞에 api 붙이는 경우 (최근)
@RequiredArgsConstructor // final 멤버변수에 대해서 생성자를 자동으로 지원한다
// final 필드에 대해서 자동으로 생성자를 지원하므로 @Autowired 주입 생략 가능
public class MemberController {

    private final MemberService memberService;

    // [1] 회원가입
    @PostMapping("/signup")
    public boolean signUp(@RequestBody MemberDto memberDto){
        System.out.println("MemberController.signUp");
        System.out.println("memberDto = " + memberDto);
        boolean result = memberService.signUp(memberDto);
        return result;
    }

    // [2] 로그인 + 세션 생성(서버내 저장소 = 주로 로그인된 회원 정보 ): HttpServletRequest req
    @PostMapping("/login")
    public boolean login(@RequestBody MemberDto memberDto, HttpServletRequest req){
        System.out.println("MemberController.login");
        System.out.println("memberDto = " + memberDto);
        MemberDto result = memberService.login(memberDto);
        if(result == null){
            return false;
        }else { // null이 아니면 로그인 성공 / 세션에 로그인 성공한 dto 를 저장
            HttpSession session = req.getSession(); // 세션 호출
            session.setAttribute("loginDto", result); // 세션 객체내 새로운 속성 추가, 로그인 성공한 결과를 loginDto 라는 이름으로 저장
            session.setMaxInactiveInterval(60*10); // 세션 유지 시간(초) : 60*10 => 10분
            return true; // 로그인 성공 처리
        }
    }
    
    // [3] 로그아웃 + 세션 삭제
    @GetMapping("/logout")
    public boolean logout(HttpServletRequest req){
        System.out.println("MemberController.logout");
        System.out.println("req = " + req);
        // 1. 세션 호출
        HttpSession session = req.getSession();
        if(session == null) return false;
        // 2. 세션 속성 초기화(삭제)
        //session.invalidate();
        // 세션내 특정 속상만 초기화
        session.removeAttribute("loginDto");
        return true;
    }

    // [4] 로그인 상태 확인 , 내 정보 확인(마이페이지)
    @GetMapping("/info")
    public MemberDto info(HttpServletRequest req){
        HttpSession session = req.getSession(); // 1. 세션 호출
        if(session == null)return null; // 2. 세션이 존재하지 않으면 null
        // 3. 로그인 성공시 저장한 loginDto의 로그인정보를 꺼낸다
        Object object = session.getAttribute("loginDto");
        // 4. 세션에 저장된 자료들은 모두 Object 타입이기때문에 타입 변환이 필요하다
        MemberDto memberDto = (MemberDto)object;
        return memberDto;
    }
    

}
