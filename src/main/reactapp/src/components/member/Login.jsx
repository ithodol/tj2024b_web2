import { useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import {useDispatch} from 'react-redux'
import {login} from '../reduxs/userSlice'

export default function Login(props){

    // ******* 리덕스 (전역변수) 사용하기 ******* 
    // (1) 리덕스를 사용하기 위한 useDispatch()
    const dispatch = useDispatch()


    // (1) 입력받은 값들을 저장하는 state 변수
    const [memberInfo, setMemberInfo] = useState({mid : '', mpwd : ''})
    // (2) 입력받은 값들을 수정하는 state 수정처리 함수
    const onInputChange = (event) => {
        setMemberInfo({...memberInfo, [event.target.name] : event.target.value});
    }
    // (3) 입력받은 값들을 axios를 이용하여 자바(스프링)에게 응답받기
    const navigate = useNavigate();
    const onLogin = async () => {
        const response = await axios.post('http://localhost:8080/api/member/login', memberInfo, {withCredentials:true})
        const result = response.data
        if(result == true){
            alert('로그인 성공');
            // (4) 로그인 성공한 경우 해당 회원 정보 가져오기
            const response2 = await axios.get('http://localhost:8080/api/member/info', {withCredentials:true})
            navigate("/")
            // ******* 리덕스 (전역변수) 사용하기 ******* 
            // (2) useDispatch 함수를 이용한 리듀서 함수 액션하기 // 로그인 액션에 로그인한 회원정보를 대입한다 // 전역변수 대입
            dispatch(login(response2.data)); // 전역(useState가 아닌 store(전역 상태)에 저장)
            // setMemberInfo(response.data); // 지역
        }else{
            alert('로그인 실패');
        }
    }


    return(<>
        <div id="container">
            <h2>로그인</h2>
            <form>
                아이디 <br />
                <input type="text" name="mid" value={memberInfo.mid} onChange={onInputChange}/> <br /><br />

                비밀번호 <br />
                <input type="password" name="mpwd" value={memberInfo.mpwd} onChange={onInputChange}/> <br /><br />
                <button type="button" className="loginBtn" onClick={onLogin}>로그인</button>
            </form>
        </div>
    </>)
}
