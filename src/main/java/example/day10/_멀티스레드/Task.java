package example.day10._멀티스레드;

import java.util.Scanner;

class 음악 extends Thread{
    boolean state1 = true; // 무한루프 실행 여부
    @Override
    public void run() {
        try{
            while (state1 == true) {
                Thread.sleep(1000); // 1초간 일시정지
                System.out.println("음악 재생 중...");
            }
        }catch (Exception e){
            System.out.println(e);
        }
    }
}

class 웹서핑 extends Thread{
    boolean state2 = true; // 무한루프 실행 여부
    @Override
    public void run() {
        try{
            while (state2 == true) {
                Thread.sleep(1000); // 1초간 일시정지
                System.out.println("웹서핑 중...");
            }
        }catch (Exception e){
            System.out.println(e);
        }
    }
}





public class Task {
    public static void main(String[] args) {
        음악 thread1 = new 음악();

        웹서핑 thread2 = new 웹서핑();
        boolean web = false;


        Scanner scan = new Scanner(System.in);
        while (web == false){
            System.out.println("1. 음악 ON/OFF | 2. 웹서핑 ON/OFF | 0. 종료");
            int ch = scan.nextInt();

            if(ch == 1){
                if(thread1.state1 == true) {
                    System.out.println("음악 시작!");
                    thread1.start();
                    thread1.state1 = false;
                }else if(thread1.state1 == false){
                    System.out.println("음악 종료!");
                    thread1.state1 = true;
                }
            }else if(ch == 2){
                if(thread2.state2 == true) {
                    System.out.println("웹서핑 시작!");
                    thread2.start();
                    thread2.state2 = false;
                }else if(thread2.state2 == false){
                    System.out.println("웹서핑 종료!");
                    thread2.state2 = true;
                }
            }else if(ch == 0){
                System.out.println("스마트폰 종료...");
                thread1.state1 = true;
                thread2.state2 = true;
                web = true;
            }
        } // while end
    } // main end
} // class end
