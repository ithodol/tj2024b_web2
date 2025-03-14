package example.day09BookPlatform.service;

import example.day09BookPlatform.model.dto.ReviewDto;
import example.day09BookPlatform.model.mapper.ReviewMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewMapper reviewMapper;

    // 리뷰 등록
    public boolean onCreate(ReviewDto reviewDto){
        return reviewMapper.onCreate(reviewDto);
    }

    // 특정 도서 리뷰 전체 조회
    public List<ReviewDto> onView(int bid){
        return reviewMapper.onView(bid);
    }

    // 리뷰 삭제
    public boolean onDelete(int bid, String rpwd){
        return reviewMapper.onDelete(bid, rpwd);
    }




}
