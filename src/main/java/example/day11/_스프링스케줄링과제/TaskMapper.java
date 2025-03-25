package example.day11._스프링스케줄링과제;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface TaskMapper {
    @Update("update day11products set stock_quantity = stock_quantity -3")
    public void products1();

    @Select("select * from day11products")
    public List<HashMap<String, String>> products2();

    @Update("update day11products set stock_quantity = stock_quantity +20 where stock_quantity <= 10")
    public void products3();

}
