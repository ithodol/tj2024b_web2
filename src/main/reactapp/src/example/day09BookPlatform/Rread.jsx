
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Rread(props){
    const [books, setBooks] = useState([]);  
    const [selectedBid, setSelectedBid] = useState('');  
    const [reviews, setReviews] = useState([]);  

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://192.168.40.10:8080/day09/book');
            setBooks(response.data); 
        } catch (error) {
            console.log(error);
        }
    };

    const fetchReviews = async (bid) => {
        if (!bid) return;  
        try {
            const response = await axios.get(`http://192.168.40.10:8080/day09/review?bid=${bid}`);
            setReviews(response.data);  
        } catch (error) {
            console.log(error);
        }
    };

    const handleBookChange = (e) => {
        const selectedBid = e.target.value;
        setSelectedBid(selectedBid);  
        fetchReviews(selectedBid);  
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div>
            <h2>도서별 리뷰 조회</h2>

            <label htmlFor="book-select">도서 </label>
            <select id="book-select" value={selectedBid} onChange={handleBookChange}>
                <option value="">선택</option>
                {books.map((book) => (
                    <option key={book.bid} value={book.bid}>
                        {book.bname} ({book.bwriter})
                    </option>
                ))}
            </select> <br/><br/><br/>

            <div>
                <h3>리뷰 목록</h3>
                {reviews.length > 0 && (
                    <div>
                        {reviews.map((review, index) => (
                            <div key={review.rid}>
                                <p>번호 : {index}</p> 
                                <p>내용 : {review.rcontent}</p>
                                <br/>
                            </div>
                        ))}
                    </div>
                )}
                {reviews.length == 0 && (
                    <p>이 책에 대한 리뷰가 없습니다.</p>
                )}
            </div>
        </div>
    );
}