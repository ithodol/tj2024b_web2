import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import {useSelector} from 'react-redux'

export default function Header(props){

    // ******* 리덕스 (전역변수) 사용하기 ******* 
    // (1) store(전역 상태)에서 로그인한 회원정보 불러오기
        // user라는 이름의 리듀서 정보 가져오기
    const logininfo = useSelector((state) => state.user.userInfo)
    console.log(logininfo);


    // (1) 로그인 상태를 저장하는 state 변수, 객체를 저장할 예정이라 빈 객체 { } 를 초기값으로 선언
    const [login, setLogin] = useState({})
    // (2) axios를 이용하여 서버에게 로그인 상태 요청하고 응답받기
    const onLoginInfo = async () => {
        // 1. axios를 이용하여 서버 요청 후 응답받기
        const response = await axios.get('http://localhost:8080/api/member/info', {withCredentials:true})
        // 2. 반환된 응답 결과를 result에 저장
        const result = response.data
        // 3. result를 state 변수에 저장
        setLogin(result);
    }
    // (3) useEffect를 이용하여 'onLoginInfo' 함수 실행
        // useEffect ( () => {}, []) 컴포넌트가 최초 한 번 (실행)랜더링 될 때
    useEffect(() => {
        onLoginInfo()
    },[])

    // (4) axios 이용하여 로그아웃 요청과 응답 받기
    const navigate = useNavigate();
    const onLogout = async () => {
        const response = await axios.get('http://localhost:8080/api/member/logout', {withCredentials:true})
        alert('로그아웃 완료');
        navigate('/');
    }



    return(<>
        <div className="headerBox">
            <ul className="header">
                <li>
                    {
                        login ? (<>
                            <div className="loginState">
                                {login.mname} 님
                            </div>
                            <button type="button" className="loginStateBtn" onClick={onLogout}>로그아웃</button>
                        </>)
                        : 
                        (<>
                            <div className="loginState">비로그인</div>
                        </>)
                        
                    }
                </li>
                <li>
                    <Link to={"/member/signup"}>
                        <FontAwesomeIcon icon={faUserPlus} className="faUserPlus" />&nbsp; 회원가입
                    </Link>
                </li>
                <li>
                    <Link to={"/"}>
                        <FontAwesomeIcon icon={faHouse} className="home" />&nbsp; 홈
                    </Link>
                </li>
                <li>
                    <Link to={"/member/login"}>
                        <FontAwesomeIcon icon={faCircleUser} className="faCircleUser" />&nbsp; 로그인
                    </Link>
                </li>
            </ul>
        </div>
    </>)
}