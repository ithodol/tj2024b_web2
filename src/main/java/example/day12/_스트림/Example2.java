package example.day12._스트림;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class Example2 {
    public static void main(String[] args) {
        // 임의의 리스트
            // List.of(초기값1, 초기값2, 초기값3, 초기값4 ...);
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
            // < > : 제네릭타입, int 아닌 Integer 사용하는 이유 : 기본 타입 불가능
                // ----> int(기본타입) / integer(참조타입/래퍼클래스) : 기본타입 8개를 클래스로 사용할 때
                // List(인터페이스/추상) / ArrayList/Vector/LinkedList(클래스/구현체)
        // 1. 컬렉션 프레임워크는 스트림을 제공함
        numbers.stream() // 스트림 생성
                .forEach(x -> System.out.println(x));

        // 2. .stream() .map() .collect(Collectors.to컬렉션명())
        List<Integer> result2 = numbers.stream()
                                        .map(x -> x * 2) // map
                                        .collect(Collectors.toList()); // map 리턴값을 List 타입으로 변환
        System.out.println(result2);

        // 3. .stream() .map() .forEach()
        numbers.stream() // 1. numbers 에 데이터 하나씩 이동하는 데이터 통로 생성
                .map(x -> x * 2) // 2. 데이터 통로를 이동하면서 데이터를 중간 연산
                .forEach(x -> System.out.println(x)); // 데이터 통로 끝에 데이터 결과를 출력

        // 4.
        numbers.stream()
                .filter(x -> x % 2 == 0) // 짝수만 필터링 // if 역할
                .forEach(x -> System.out.println(x));
        // vs
            // 일반 for 문
        for( int index =  0 ; index <= numbers.size()-1 ; index++ ){
            if( numbers.get(index) % 2 == 0 ){
                System.out.println( numbers.get(index) );
            }
        }


        // 5.
            // .stream() .sorted() .forEach() : 오름차순 정렬
        numbers.stream()
                .sorted()
                .forEach(x -> System.out.println(x));

            // .stream() .sorted( Comparator.reverseOrder() ) .forEach() : 내림차순 정렬
        numbers.stream()
                .sorted(Comparator.reverseOrder())
                .forEach(x -> System.out.println(x));



    }
}
