package example.day11._스프링스레드;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ThreadService {
    // (1) 비동기
    @Async // [2] 멀티스레드를 적용할 메소드 위에 @Async
    public void thread1(){
        String name = UUID.randomUUID().toString();
        for( int i = 1; i <= 10; i++){
            System.out.println("작업스레드 : " + i + name);
            try{
                Thread.sleep(1000);
            }catch(Exception e){
                System.out.println(e);
            }
        } // for end
    } // thread1 비동기 end

    // (2) 동기 / synchronized
    public synchronized void thread2(){
        String name = UUID.randomUUID().toString();
        for( int i = 1; i <= 10; i++){
            System.out.println("작업스레드 : " + i + name);
            try{
                Thread.sleep(1000);
            }catch(Exception e){
                System.out.println(e);
            }
        } // for end
    } // thread2 동기 end


} // main end
