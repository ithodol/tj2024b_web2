package example.day07Task.controller;

import example.day07Task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/day07/task")
@CrossOrigin("http://192.168.40.10:5173")
public class TaskController {
    // private List<Map<Object,String>> phoneBook = new ArrayList<>();
    @Autowired
    private TaskService taskService;

    @PostMapping
    public boolean onPost(@RequestBody Map<Object,String> map){
        System.out.println("TaskController.onPost");
        System.out.println("map = " + map);
        return taskService.onPost(map);
    }

    @GetMapping
    public List<Map<Object,String>> onFindAll(){
        System.out.println("TaskController.onFindAll");
        return taskService.onFindAll();
    }
}
