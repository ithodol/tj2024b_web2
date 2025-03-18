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

    private final FileService fileService; // 파일서비스 (업로드, 다운로드, 파일삭제 기능 포함)
    // [1] 회원가입
    public boolean signUp(MemberDto memberDto){
        System.out.println("MemberService.signUp");
        System.out.println("memberDto = " + memberDto);
        try {
            // (1) 만약 첨부파일(프로필업로드)이 존재하는지 검사
            if (memberDto.getUploadfile() == null) { } // 업로드가 존재하지 않으면
            else { // 업로드가 존재하면 파일서비스의 업로드 메소드 사용하기
                // (2) 파일서비스내 업로드 함수를 이용하여 첨부파일을 업로드 한다
                String filename = fileService.fileUpload(memberDto.getUploadfile());
                // (3) 업로드된 파일명을 memberDto 에 저장
                memberDto.setMimg(filename);
            }
            boolean result = memberMapper.signUp(memberDto);
            System.out.println("result = " + result);
            return result;
        }catch (Exception e){return false;} // 업로드와 회원가입 DB 처리 중 예외 발생시 false 반호나
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
