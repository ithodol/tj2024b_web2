import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Bread(props){
    useEffect(() => {
        onRead();
    },[])

    const onRead = async () =>{
        const response = await axios.get('http://192.168.40.10:8080/day09/book')
        console.log(response.data);
        setBook( response.data );
    }
    const [book, setBook] = useState([])
    
    return(<>
        <div id='read'> 
            <h3> 전체조회 페이지 </h3> 
            <table>
                <thead>
                    <tr><th> 번호</th><th>제목</th><th>작가</th><th>설명</th></tr>
                </thead>
                <tbody>
                    {
                        book.map( ( book , index ) => { 
                            return ( <tr key={index}>
                                <Link to={`/bview?bid=${book.bid}`}>{book.bid}</Link>
                                <td>{ book.bname }</td>
                                <td>{ book.bwriter }</td>
                                <td>{ book.bcontent }</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    </>)
}