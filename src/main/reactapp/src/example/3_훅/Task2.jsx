/*
    리액트 과제3 : 리액트 전화번호부 만들기
    조건
        1. (저장) '이름'이랑 '전화번호' 입력받아 배열에 저장
        2. (전체출력) 저장된 배열내 모든 정보(이름/전화번호)를 table 또는 ol 또는 ul로 모두 출력하시오
        3. useState 사용
*/

import { useState } from "react"

export default function Tsak2(){
    
    let[nameMsg, setName] = useState('')
    let[phoneMsg, setPhone] = useState('')
    let[msgList, setMsgList] = useState([])

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleChange2 = (event) => {
        setPhone(event.target.value)
    }

    const save = () => {
        setMsgList([...msgList, {nameMsg : nameMsg, phoneMsg : phoneMsg}])
    }

    return (<>
        <h2>전화번호부</h2>
        <input value={nameMsg} onChange={handleChange} placeholder="이름"/>
        <br/>
        <input value={phoneMsg} onChange={handleChange2} placeholder="연락처"/>
        <br/>
        <button type="button" onClick={save}>등록</button>
        <ul>
            {msgList.map((list, index) => (
                <li key={index}>
                    이름 : {list.nameMsg} <br/>
                    연락처 : {list.phoneMsg}
                    <hr/>
                </li>
            ))}
        </ul>
        
    </>)
}