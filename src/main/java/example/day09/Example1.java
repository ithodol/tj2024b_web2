package example.day09;

import lombok.Builder;

import java.lang.reflect.Member;
@Builder
class  MemberDto{
    // 멤버변수
    private String name;
    private int age;

    // 생성자
    public MemberDto(String name, int age){
        this.name = name;
        this.age = age;
    }
}

public class Example1 {
    public static void main(String[] args) {
        // (1) (객체) MemberDto 생성할 때 멤버변수에 초기값을 대입하는 방법 = *생성자*
        MemberDto memberDto0 = new MemberDto("유재석", 40);
//        MemberDto memberDto0 = new MemberDto("유재석", 40);
//        MemberDto memberDto1 = new MemberDto() // 존재하지 않은 생성자 사용
//        MemberDto memberDto2 = new MemberDto("유재석"); // 정의된 생성자가 없어서, 매개변수 갯수가 일치하지 않아서
//        MemberDto memberDto3 = new MemberDto(40, "유재석"); // 정의된 생성자가 없어서, 매개변수의 순서가 일치하지 않아서
//        MemberDto memberDto4 = new MemberDto("유재석", 40, "연예인"); // 정의된 생성자가 없어서, 매개변수가 일치하지 갯수가 일치하지 않아서
        // 생성자 규칙
            // 1. 정의된(만든) 생성자만 사용 가능 / 생성자가 없을 경우 기본 생성자가 자동으로 생성됨
            // 2. 매개변수의 순서, 타입, 갯수 일치해야함
        
        // 다양한 생성자를 사용하면 복잡도 상승하기 때문에 빌더 패턴 사용
        // ** 빌더패턴 @Builder ** : 복잡한 객체 생성 과정을 단순화 해주는 디자인 패턴
        // (2) 롬복 제공하는 @Builder : 어노테이션 객체 생성
            // 클래스명.builder() : 빌더 객체 생성
        MemberDto memberDto5 = MemberDto.builder().name("유재석").age(40).build();
        MemberDto memberDto6 = MemberDto.builder().build();
        MemberDto memberDto7 = MemberDto.builder().name("유재석").build();
        MemberDto memberDto8 = MemberDto.builder().age(40).name("유재석").build();

    }
}
