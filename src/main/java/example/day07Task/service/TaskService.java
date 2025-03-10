package example.day07Task.service;

import example.day07Task.mapper.TaskMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class TaskService {
    @Autowired
    private TaskMapper taskMapper;

    public boolean onPost(Map<Object,String> map){
        return taskMapper.onPost(map);
    }

    public List<Map<Object,String>> onFindAll(){
        return taskMapper.onFindAll();
    }
}
