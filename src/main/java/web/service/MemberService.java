package web.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import web.model.dto.MemberDto;
import web.model.mapper.MemberMapper;

@Service // 해당 클래스가 서비스임을 주입한다
@RequiredArgsConstructor // final 필드에 대해서 @Autowired 생략 가능
public class MemberService {

    private final MemberMapper memberMapper;
    // [1] 회원가입
    public boolean signUp(MemberDto memberDto){
        System.out.println("MemberService.signUp");
        System.out.println("memberDto = " + memberDto);
        boolean result = memberMapper.signUp(memberDto);
        System.out.println("result = " + result);
        return result;
    }

    // [2] 로그인
    @PostMapping("/login")
    public MemberDto login(@RequestBody MemberDto memberDto){
        System.out.println("MemberService.login");
        System.out.println("memberDto = " + memberDto);
        MemberDto result = memberMapper.login(memberDto);
        return result;
    }

}
