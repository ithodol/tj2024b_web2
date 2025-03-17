package web.model.mapper;

import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import web.model.dto.MemberDto;

@Mapper // 해당 인터페이스가 mapper임을 주입
public interface MemberMapper {
    // 추상메소드이기 때문에 { 구현부 }가 필요 없다

    // [1] 회원가입
    @Insert("insert into member(mid, mpwd, mname, mimg) values(#{mid}, #{mpwd}, #{mname}, #{mimg})")
    public boolean signUp(MemberDto memberDto);

    // [2] 로그인
    @Select("select mno, mid, mname, mimg from member where mid = #{mid} and mpwd = #{mpwd}")
    // public boolean login(MemberDto memberDto);
    // => select 결과가 있으면 true, 없으면 null 이라서 오류가 발생할 수 있기 때문에 타입을 Dto 로 수정
    public MemberDto login(MemberDto memberDto);
    // => select 결과가 있으면 memberDto 에 저장, 없으면 null

}
