package example.day07Task.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface TaskMapper {
    @Insert("insert into task (user, phone) values(#{user}, #{phone})")
    public boolean onPost(Map<Object,String> map);

    @Select("select * from task")
    public List<Map<Object, String>> onFindAll();
}
