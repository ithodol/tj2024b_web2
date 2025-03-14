package example.day09BookPlatform.controller;

import example.day09BookPlatform.model.dto.BookDto;
import example.day09BookPlatform.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/day09/book")
@CrossOrigin("http://192.168.40.10:5173")
public class BookController {
    @Autowired
    private BookService bookService;

    // 추천 도서 전체 조회
    @GetMapping
    public List<BookDto> onRead(){
        System.out.println("BookController.onRead");
        return bookService.onRead();
    }

    // 추천 도서 등록
    @PostMapping
    public boolean onCreate(@RequestBody BookDto bookDto){
        System.out.println("BookController.onCreate");
        System.out.println("bookDto = " + bookDto);
        return bookService.onCreate(bookDto);
    }

    // 추천 도서 상세 조회
    @GetMapping("/view")
    public BookDto onView(@RequestParam int bid){
        System.out.println("BookController.onView");
        System.out.println("bid = " + bid);
        return bookService.onView(bid);
    }

    // 추천 도서 수정
    @PutMapping
    public boolean onUpdate(@RequestBody BookDto bookDto){
        System.out.println("BookController.onUpdate");
        System.out.println("bookDto = " + bookDto);
        return bookService.onUpdate(bookDto);
    }

    // 추천 도서 삭제
    @DeleteMapping
    public boolean onDelete(@RequestParam int bid, @RequestParam String bpwd){
        System.out.println("BookController.onDelete");
        System.out.println("bid = " + bid + ", bpwd = " + bpwd);
        return bookService.onDelete(bid, bpwd);
    }

}
