import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

export default function Bview(props){
    const [ searchParams ] = useSearchParams();
    const bid = searchParams.get('bid');

    const navigate = useNavigate(); 
    const [book, setBook] = useState();
    const [review, setReview] = useState([]);

    useEffect(() => {
        onRead();  
        fetchreview();  
    }, [bid]);  

    const onRead = async () => {
        try {
            const response = await axios.get(`http://192.168.40.10:8080/day09/book/view?bid=${bid}`);
            console.log(response.data);  
            setBook(response.data);      
        } catch (error) {
            console.log(error);
        }
    };

    const fetchreview = async () => {
        try {
            const response = await axios.get(`http://192.168.40.10:8080/day09/review?bid=${bid}`);
            setReview(response.data);  
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditClick = (bid) => {
        navigate(`/bupdate?bid=${bid}`);
    }

    const handleDelete = async () => {
        const bpwd = prompt("도서 삭제를 위한 비밀번호를 입력하세요");  

        try { 
            const deleteResponse = await axios.delete(`http://192.168.40.10:8080/day09/book?bid=${bid}&bpwd=${bpwd}`);
            if (deleteResponse.data == true) {
                alert('삭제 성공');
                navigate("/bread");  
            }else{
                alert('비밀번호가 일치하지 않습니다.');
            }
        } catch (error) {
            console.log(error);
            alert('삭제 중 오류가 발생했습니다.');
        }
        
    };

    return (
        <div>
            {book && (
                <>
                    <h3>책 상세 정보</h3>
                    <p>제목: {book.bname}</p>
                    <p>작가: {book.bwriter}</p>
                    <p>내용: {book.bcontent}</p>
                    <button onClick={() => handleEditClick(book.bid)}>도서 수정</button> 
                    <button onClick={handleDelete}>도서 삭제</button><br/><br/><br/>
                </>
            )}
            <h3>리뷰 목록</h3>
            {review.length > 0 && (
                <div>
                    {review.map((review) => (
                        <div key={review.rid}>
                            <p>리뷰 : {review.rcontent}</p>
                        </div>
                    ))}
                </div>
            )}
            {review.length == 0 && (
                <p>이 책에 대한 리뷰가 없습니다.</p>
            )}
</div>
    );
}