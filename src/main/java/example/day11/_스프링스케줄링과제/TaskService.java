package example.day11._스프링스케줄링과제;

import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskMapper taskMapper;

    @Scheduled(cron = "*/30 * * * * *")
    public void products1(){
        System.out.println("매 30초마다 모든 제품의 재고는 3개씩 감소");
        taskMapper.products1();
    }


    @Scheduled(cron = "0 */1 * * * *")
    public void products2(){
        System.out.println("매 1분마다 모든 제품 정보를 조회하여 console 출력");
        List<HashMap<String, String>> list = taskMapper.products2();

        for(HashMap<String, String> product : list){
            System.out.println(product);
        }

    }


    @Scheduled(cron = "0 */5 * * * *")
    public void products3(){
        System.out.println("매 5분마다 재고가 10 이하인 상품의 재고를 20개 추가");
        taskMapper.products3();
    }
}
