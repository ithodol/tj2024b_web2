package example.day11._스프링스케줄링;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalTime;

@Service
public class ScheduleService {
    // (1)
    // [2] 스케줄링을 적용할 메소드 위에 '@Scheduled(패턴)'
    @Scheduled(fixedRate = 3000) // 3초 마다 실행
    public void task1(){
        System.out.println("Task 1 작동 : " + LocalTime.now());
    }

    // (2)
    @Scheduled(fixedRate = 5000) // 5초 마다 실행
    public void task2(){
        System.out.println("Task 2 작동 : " + LocalTime.now());
    }

    // (3)
    @Scheduled(cron = "*/5 * * * * *") // 5초마다 실행
    public void task3(){
        System.out.println("Task3 작동 : " + LocalTime.now());
    }

}
