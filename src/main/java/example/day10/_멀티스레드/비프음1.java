package example.day10._멀티스레드;

import java.awt.*;

public class 비프음1 implements Runnable{
    @Override // 추상메소드를 재정의한다
    public void run() {
        Toolkit toolkit = Toolkit.getDefaultToolkit();
        for(int i = 1; i <= 5; i++){
            toolkit.beep(); // 비프음
            try{
                Thread.sleep(1000);
            }catch (Exception e){
                System.out.println(e);
            }
        }
    } // run end
} // class end
