package example.day07.controller;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/day07/react")
@CrossOrigin("http://localhost:5173") // CORS 정책 허용, 특정 URL만 허용 가능하도록 한다
public class ReactController {
    // 샘플(DB대신 사용)
    private List<Map<Object,String>> boards = new ArrayList<>();
    // [1] POST
    @PostMapping("")
    public boolean onPost(@RequestBody Map<Object,String>map){
        System.out.println("ReactController.onPost");
        System.out.println("map = " + map);
        boards.add(map); // 요청받은 데이터를 리스트에 저장
        return true;
    }

    // [2] GET
    @GetMapping("")
    public List<Map<Object,String>> onFindAll(){
        System.out.println("ReactController.onFindAll");
        return boards; // 리스트를 응답하기
    }

}
