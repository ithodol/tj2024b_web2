import { useEffect, useState } from "react";
import axios from 'axios';

export default function Example2 (props) {
    // [1] 입력받은 데이터를 저장하는 폼 state 변수
    const [formData, setFormData] = useState({writer:'', content : '', pwd : ''})
    // [2] 입력받은 데이터를 랜더링하는 이벤트함수
    const formDataChange = (e) => {
        console.log(e.target); // 이벤트를 발생한 html dom(마트업/태그)
        console.log(e.target.name); // 이벤트를 발생한 html dom의 name 속성 값 반환
        console.log(e.target.value); // 이벤트를 발생한 html dom의 value 속성 값 반환 
        // 스프레드 연산자를 이용한 state 변수 변경
        // -> setXXX ({...기존객체, 새로운속성명 : 새로운값}) *만약 새로운 속성명이 존재하면 수정됨
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    // [3] 현재 state 변수를 스프링 서버에게 보내기
    const onPost = async (e) => {
        try{
            const response = await axios.post('http://localhost:8080/day07/react', formData) // state 변수를 axios로 보내기
            if(response.data == true){ // 만약 등록 응답이 ture 면 
                alert('등록 성공');
                setFormData({writer : '', content : '', pwd : ''}) // state 초기화
                onFindAll();
            }else{
                alert('등록 실패');
            }
        }catch(error){console.log(error)}
    }

    // [4] 서버에 저장된 방문록정보(작성자/내용/비밀번호 여러개) 요청한다
        // (1) 컴포넌트 마운트(생성)될 때 최초 1번 실행
        useEffect(() => {onFindAll()}, []); // 컴포넌트가 생성될 때 1번 onFindAll 함수가 실행된다
                                    // [] 사용하지 않으면 무한 랜더링
        // (2) 여러개의 방문록을 가지는 state 변수 생성
        const [boards, setBoards] = useState([]); 

    const onFindAll = async(e) => {
        try{
            // (3) 주로 동기 통신 : async(e) => {await axios.메소드명()}
                //  서버의 도메인이 다르기 땜누에 '/day07/react' 사용 불가(오류발생) -> 서버 도메인까지 작성해야함
            const response = await axios.get('http://localhost:8080/day07/react');
            setBoards (response.data); // 서버로부터 받은 정보를 state 변수에 저장 // 재랜더링

        }catch(error){console.log(error);}
    }


    return(<>
        <div>
            <h4>입력 폼</h4>
            <form>
                작성자 : <input type="text" value={formData.writer} name='writer' onChange={formDataChange}/> <br/>
                방문록 : <input type="text" value={formData.content} name='content' onChange={formDataChange}/> <br/>
                비밀번호 : <input type="text" value={formData.pwd} name='pwd' onChange={formDataChange}/> <br/>
                <button type="button" onClick={onPost}>등록</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>번호</th><th>작성자</th><th>내용</th><th>비고</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        boards.map((board, index) => {
                            return (<tr>
                                <td> {board.num}</td>
                                <td> {board.writer}</td>
                                <td> {board.content}</td>
                                <td> 버튼</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    </>)
}