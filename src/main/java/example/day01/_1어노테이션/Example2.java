package example.day01._1어노테이션;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

// [1] 어노테이션 만들기
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface Annotation2{
    // (1) instance 타입 앞에 @를 붙인다
    // (2) 어노테이션명을 임의로 지정한다
    // (3) 어노테이션명 위에 @Retention(RetentionPolicy.RUNTIME) 리플렉션 설정
    // (4) 어노테이션명 위에 @Target(ElementType.적용할 대상) 적용할 대상 설정
    // (5) 추상메소드를 만든다 + default 기본값
    String value1();
    int value2() default 100;
}

class TestClass2{
    // [2] 지정한 코드에 어노테이션 주입하기
    @Annotation2(value1 = "유재석", value2 = 40)
    public void method1(){} // 해당 함수 안에서 value1 = "유재석", value2 = 40 사용 가능
    
    @Annotation2(value1 = "강호동" , value2 = 100)
    public void method2(){} // 해당 함수 안에서 value1 = "강호동"과 value2 = 100 사용 가능
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE) // 클래스, 인터페이스, 열거형 타입 대상에 적용하겠다고 설정
@interface Annotation3{
    String value1();
    int value2() default 100;
}
@Annotation3(value1 = "유재석", value2 = 40) // 아래 클래스에 어노테이션 주입
class Member{}



public class Example2 {
    public static void main(String[] args) {
        Annotation3 annotation3 = Member.class.getAnnotation(Annotation3.class);
        System.out.println(annotation3.value1()); // 유재석 // 특정한 클래스에
        System.out.println(annotation3.value2()); // 40
    }
}
