package example.day12._과제;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

class 과일{
    String name;
    public 과일(){}
    public  과일(String name){}

    public void onMessage1(String message){
        System.out.println(message);
    }

    public static void onMessage2(String message){
        System.out.println(message);
    }
}



public class Task {
    public static void main(String[] args) {
        // [ 람다식, 스트림, 메소드레퍼런스 과제 ]
        List<String> 과일들 = List.of("사과", "바나나", "체리", "대추", "포도");

        System.out.println("1. [메소드 레퍼런스 사용안함]  forEach함수를 활용하여 과일들을 하나씩 console에 출력하시오.");
        과일들.stream()
                .forEach(x -> System.out.println(x));


        System.out.println("2.[메소드 레퍼런스 사용안함]  map함수를 활용하여 과일들을 하나씩 console에 출력하시오.");
        List<String> 과일들들 = 과일들.stream()
                                    .map(x -> x )
                                    .collect(Collectors.toList());
        System.out.println(과일들들);


        System.out.println("3.[메소드 레퍼런스 사용안함]  filter함수를 활용하여 과일들 중에 '바나나' 또는 '대추'만 console에 출력하시오.");
        과일들.stream()
                .filter(x -> x.equals("바나나") || x.equals("대추"))
                .forEach(x -> System.out.println(x));


        System.out.println("4.[메소드 레퍼런스 사용안함]  sorted함수를 활용하여 과일들을 내림차순으로 정렬하여 하나씩 console에 출력하시오.");
        과일들.stream()
                .sorted(Comparator.reverseOrder())
                .forEach(x -> System.out.println(x));

        System.out.println("5.[메소드 레퍼런스 사용함]  forEach함수를 활용하여 과일들을 하나씩 console에 출력하시오.");
        과일들.forEach(과일 :: onMessage2);


        System.out.println("6.[메소드 레퍼런스 사용함]  map함수를 활용하여 과일들을 하나씩 console에 출력하시오.");
        과일들.stream().map(x -> x)
                        .forEach(과일::onMessage2);



        System.out.println("7.[메소드 레퍼런스 사용함]  filter함수를 활용하여 과일들 중에 '바나나' 또는 '대추'만 console에 출력하시오.");
        과일들.stream()
                .filter(x -> x.equals("바나나") || x.equals("대추"))
                .forEach(과일 :: onMessage2);


        System.out.println("8.[메소드 레퍼런스 사용함]  sorted함수를 활용하여 과일들을 내림차순으로 정렬하여 하나씩 console에 출력하시오.");
        과일들.stream()
                .sorted(Comparator.reverseOrder())
                .forEach(과일 :: onMessage2);
    } // main end
} // class end
