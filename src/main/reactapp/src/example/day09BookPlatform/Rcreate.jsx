import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Rcreate(props){
    const [rid, setRid] = useState('');
    const [bid, setBid] = useState('');
    const [rcontent, setRcontent] = useState('');
    const [rpwd, setRpwd] = useState('');
    const navigate = useNavigate();
    
    const handleCreate = async () => {
        const reviewDto = {
            rid : rid,
            bid : bid,
            rcontent : rcontent,
            rpwd : rpwd
        };

        try {
            const response = await axios.post('http://192.168.40.10:8080/day09/review', reviewDto);
            if (response.data == true) {
                alert('등록 성공!');
                navigate("/bread");  
                setBid('');
                setRcontent('');
                setRpwd('');
            } else {
                alert('등록 실패!');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div>
                <h2>리뷰 등록 페이지</h2>
                <label>
                    도서 번호<input type="number" value={bid} onChange={(e) => setBid(e.target.value)}/>
                </label>
                <br />
                <label>
                    내용<input type="text" value={rcontent} onChange={(e) => setRcontent(e.target.value)}/>
                </label>
                <br />
                <label>
                    비밀번호<input type="text" value={rpwd} onChange={(e) => setRpwd(e.target.value)}/>
                </label>
                <br />
                <button onClick={handleCreate}>등록</button>
            </div>
        </>
    );
}