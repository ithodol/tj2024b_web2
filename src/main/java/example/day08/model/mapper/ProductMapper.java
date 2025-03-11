package example.day08.model.mapper;

import example.day08.model.dto.ProductDto;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ProductMapper {
    // [2] 전체 조회
    @Select("select * from products")
    public List<ProductDto> onRead();

    // [1] 제품등록 , dto의 멤버변수와 db테이블의 속성명은 동일하게.<권장/관례>
    @Insert("insert into products( name , price , comment ) " +
            " values ( #{ name } , #{ price } , #{ comment } )")
    public boolean onCreate( ProductDto productDto );
    
    // [3] 제품 수정
    @Update("update products set name = #{name}, price = #{price}, comment = #{comment} where id = #{id}")
    public boolean onUpdate( ProductDto productDto );

    // [4] 제품 삭제
    @Delete("delete from products where id = #{id}")
    public boolean onDelete(int id);
}