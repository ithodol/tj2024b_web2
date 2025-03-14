import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Bcreate(props){
    const [bname, setBname] = useState('');
    const [bwriter, setBwriter] = useState('');
    const [bcontent, setBcontent] = useState('');
    const [bpwd, setBbpwd] = useState('');
    const navigate = useNavigate();
    
    const handleCreate = async () => {
        const bookDto = {
            bname: bname,
            bwriter: bwriter,
            bcontent: bcontent,
            bpwd : bpwd
        };

        try {
            const response = await axios.post('http://192.168.40.10:8080/day09/book', bookDto);
            if (response.data == true) {
                alert('도서 등록 성공');
                navigate("/bread");  
                setBname('');
                setBwriter('');
                setBcontent('');
                setBbpwd('');
            } else {
                alert('도서 등록 실패');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div>
                <h2>등록 페이지</h2>
                <label>
                    제목<input type="text" value={bname} onChange={(e) => setBname(e.target.value)}/>
                </label>
                <br />
                <label>
                    작가<input type="text" value={bwriter} onChange={(e) => setBwriter(e.target.value)}/>
                </label>
                <br />
                <label>
                    내용<input type="text" value={bcontent} onChange={(e) => setBcontent(e.target.value)}/>
                </label>
                <br />
                <label>
                    비밀번호<input type="password" value={bpwd} onChange={(e) => setBbpwd(e.target.value)}/>
                </label>
                <br />
                <button onClick={handleCreate}>등록</button>
            </div>
        </>
    );
}