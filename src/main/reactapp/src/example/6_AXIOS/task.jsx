/*
    리액트 + Spring 과제4 : 리액ㅌ 전화번호부 만들기(과제3) + Spring 서버 + myBatis
        조건1 : (저장) '이름', '전화번호' 입력받아 서버에게 전송
        조건2 : (전체출력) 서버로부터 받은 모든 정보(이름/전화번호)를 table 또는 ol 또는 ul로 모두 출력하시오
        조건3 : useState사용, useEffect 사용, axios 사용
    
    [참고]
        1. 3_훅 --> Task2.jsx
        2. 6_AXIOS --> Exampel2.jxs
*/

import axios from "axios";
import { useEffect, useState } from "react"

export default function Task(){
    const[formData, setFormData] = useState({user : '', phone : ''})

    const formDataChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    const onPost = async (e) => {
        try{
            const response = await axios.post('http://192.168.40.10:8080/day07/task', formData)
            if(response.data == true){
                alert('등록성공');
                setFormData({user : '', phone : ''})
                onFindAll();
            }else{
                alert('등록실패');
            }
        }catch(error){console.log(error);}
    }


    useEffect(() => {onFindAll()}, []);
    const [phoneBook, setPhoneBook] = useState([]);
    const onFindAll = async(e) =>{
        try{
            const response = await axios.get('http://192.168.40.10:8080/day07/task');
            setPhoneBook(response.data);
        }catch(error){console.log(error);}
    }




    return(<>
        <h3>전화번호부(과제4)</h3>
        <form>
            이름 : <input type="text" value={formData.user} name="user" onChange={formDataChange}/> <br/>
            전화번호 : <input type="text" value={formData.phone} name="phone" onChange={formDataChange}/> <br/>
            <button type="button" onClick={onPost}>등록</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>이름</th><th>전화번호</th>
                </tr>
            </thead>
            <tbody>{
                phoneBook.map((phone, index) => {
                    return(
                        <tr>
                            <td>{phone.user}</td>
                            <td>{phone.phone}</td>
                        </tr>
                    )
                })
            }</tbody>
        </table>
    
    </>)
}