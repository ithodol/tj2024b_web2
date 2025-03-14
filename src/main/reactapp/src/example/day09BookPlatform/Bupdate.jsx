import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


export default function Bupdate(props){
    const [ searchParams ] = useSearchParams();
    const bid = searchParams.get('bid');

    const [bname, setBname] = useState('');
    const [bwriter, setBwriter] = useState('');
    const [bcontent, setBcontent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://192.168.40.10:8080/day09/book/view?bid=${bid}`);
                setBname(response.data.bname);
                setBwriter(response.data.bwriter);
                setBcontent(response.data.bcontent);
            } catch (error) {
                console.error("책 정보를 가져오는 데 실패했습니다.", error);
            }
        };
        fetchBook();
    }, [bid]); 

    const handleUpdate = async () => {
        const password = prompt("도서 수정을 위해 비밀번호를 입력하세요");  
        const bookDto = {
            bid: bid,  
            bname: bname,
            bwriter: bwriter,
            bcontent: bcontent,
            bpwd: password,
        };
        try {
            const response = await axios.get(`http://192.168.40.10:8080/day09/book/view?bid=${bid}`);
            if (response.data.bpwd == password) {
                const response = await axios.put(`http://192.168.40.10:8080/day09/book?bid=${bid}`, bookDto); 
                if (response.data == true) {
                    setBname('');
                    setBwriter('');
                    setBcontent('');
                }
                alert('도서 수정 성공');
                navigate("/bread");  
            } else {
                alert('도서 수정 실패');
            }
        } catch (error) {
            console.log(error);
            alert('수정 중 오류가 발생했습니다.');
        }
    };

    return (
        <>
            <div>
                <h2>수정 페이지</h2>
                <label>
                    제목<input type="text" value={bname} onChange={(e) => setBname(e.target.value)} />
                </label>
                <br />
                <label>
                    작가<input type="text" value={bwriter} onChange={(e) => setBwriter(e.target.value)} />
                </label>
                <br />
                <label>
                    내용<input type="text" value={bcontent} onChange={(e) => setBcontent(e.target.value)} />
                </label>
                <br />
                <button onClick={handleUpdate}>도서 수정</button>
            </div>
        </>
    );
}