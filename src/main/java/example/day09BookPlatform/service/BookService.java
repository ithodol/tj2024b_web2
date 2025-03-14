package example.day09BookPlatform.service;

import example.day09BookPlatform.model.dto.BookDto;
import example.day09BookPlatform.model.mapper.BookMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.awt.print.Book;
import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookMapper bookMapper;

    // 추천 도서 전체 조회
    public List<BookDto> onRead(){
        return bookMapper.onRead();
    }

    // 추천 도서 등록
    public boolean onCreate(@RequestBody BookDto bookDto){
        return bookMapper.onCreate(bookDto);
    }

    // 추천 도서 상세 조회
    public BookDto onView(@RequestParam  int bid){
        return bookMapper.onView(bid);
    }

    // 추천 도서 수정
    public boolean onUpdate(@RequestBody BookDto bookDto){
        return bookMapper.onUpdate(bookDto);
    }

    // 추천 도서 삭제
    public boolean onDelete(@RequestParam int bid, @RequestParam String bpwd){
        return bookMapper.onDelete(bid, bpwd);
    }
}
