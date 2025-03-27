package example.day13;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/day13/users")
@RequiredArgsConstructor
public class TranController {
    private final TranService tranService;

    // (1)
    @PostMapping
    public boolean tran(){
        tranService.tran();
        return true;
    }

    // (2) '서장훈'이 '신동엽'에게 10만원을 보내는 예제
    @PostMapping("/transfer")
    public boolean transfer(@RequestBody Map<String, String> params){
        try {
            tranService.transfer(params);
            return true; // 예외 발생 X -> 이체 완료
        }catch (Exception e){
            return false; // 예외 발생 O -> 이체 실패
        }
    }
    
    

}
