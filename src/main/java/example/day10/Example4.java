package example.day10;

import org.apache.catalina.User;

// user 클래스
class User1 extends Thread{
    public Calculator calculator;

    @Override
    public void run() {
        calculator.setMemory(100); // 100 대입

    }
} // user1 end


class User2 extends Thread{
    public Calculator calculator;

    @Override
    public void run() {
        calculator.setMemory(200); // 200 대입
    }
} // user2 end


// 계산기 클래스
class Calculator{
    public int memory; // 멤버변수
    // public  void setMemory (int memory) { // 비동기
    public synchronized void setMemory(int memory) { // 동기화방법1 :메소드 반환타입 앞에 'synchronized'
        synchronized (this) { // 동기화 방법2 : synchronized (this) {}
            this.memory = memory;
            try {
                Thread.sleep(2000);
                // user1 스레드가 2초 동안 일시정지 하는 중간에 user2 스레드가 200으로 대입됨 (병렬처리)
                // 주의할점 : 두개 이상의 스레드가 하나의 메소드를 호출할 때 비동기화 처리됨
                // 두개 이상의 스레드가 하나의 메소드를 순서대로 호출할 때 동기화 처리됨
                // 두개 이상의 스레드가 하나의 메소드를 요청하면 먼저 요청한 스레드가 종료될 때까지 다음 스레드는 대기 상태
            } catch (Exception e) {
                System.out.println(e);
            }
            System.out.println(this.memory); // 100, 200 (x) => 200, 200 (O)
        }
    }

} // calculator end


// 실행 클래스
public class Example4 {
    public static void main(String[] args) {
        // 1. 계산기 객체 생성
        Calculator calculator = new Calculator();
        
        // 2. 각 객체에 동일한 계산기를 대입
        User1 user1 = new User1();
        user1.calculator = calculator;

        User2 user2 = new User2();
        user2.calculator = calculator;


//        // user1, user2 두 객체가 동일한 calculator 객체를 사용 중
//        user1.calculator.memory = 100;
//        System.out.println(user2.calculator.memory); // 100

        // 3. 각 객체가 계산기에 대입하는 병렬처리
        user1.start(); // synchronized (전)결과 : 200 / (후)결과 : 100
        user2.start(); // synchronized (전)결과 : 200 / (후)결과 : 200

    }
}
