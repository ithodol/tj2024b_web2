package example.day09BookPlatform.model.mapper;

import example.day09BookPlatform.model.dto.BookDto;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface BookMapper {
    // 추천 도서 전체 조회
    @Select("select * from book")
    public List<BookDto> onRead();

    // 추천 도서 등록
    @Insert("insert into book(bname, bwriter, bcontent, bpwd) values(#{bname}, #{bwriter}, #{bcontent}, #{bpwd})")
    public boolean onCreate(BookDto bookDto);

    // 추천 도서 상세 조회
    @Select("select * from book where bid = #{bid}")
    public BookDto onView(int bid);

    // 추천 도서 수정
    @Update("update book set bname = #{bname}, bwriter = #{bwriter}, bcontent = #{bcontent} where bid = #{bid} and bpwd = #{bpwd}")
    public boolean onUpdate(BookDto bookDto);

    // 추천 도서 삭제
    @Delete("delete from book where bid = #{bid} and bpwd = #{bpwd}")
    public boolean onDelete(int bid, String bpwd);
}
