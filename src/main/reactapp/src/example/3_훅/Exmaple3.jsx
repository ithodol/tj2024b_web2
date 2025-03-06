import { useState } from "react";

export default function Example3 (props){
    
    // (1) 일반적인 JS 방법
    const 입력함수 = () => {
        const msg = document.querySelector('#msg').value
        console.log(msg);
    }

    // (2) 리액트 방법
    const [msg, setMsg] = useState('') // 상태(state) 변수 :  변수값에 따른 컴포넌트를 랜더링 제공
    
    const 입력함수2 = (event) => {
        console.log(event); // onChange되고나서의 이벤트 결과 정보(객체)
        console.log(event.target); // onChange 이벤트를 발생시킨 마크업(대상)
        console.log(event.target.value) // onChange 이벤트를 발생시킨 마크업의 value 반환
        // (기존 방법) document.querySelector('xxx').value
        // (리액트 방법) e.target.value
        setMsg(event.target.value); // => 사용자가 입력한 input 값을 리액트에서 관리한다
    }

    // (3) 리액트 방법2
    const[image, setImage] = useState('짱구1.jpg'); // 이미지를 저장하는 state변수 선언
    // 임의의 이미지를 2개 이상 다운로드 받아서 리액트 폴더내 public에 저장

    const 변경함수3 = () => {
        // state 변수의 값이 변경되면 자동으로 새로고침/랜더링/컴포넌트재호출/함수재호출/함수다시return => 리액트 UI업데이트
        // state 변수의 값을 변경하는 방법 : set변수명(새로운값)
        setImage(image == '짱구1.jpg' ? '짱구2.jpg' : '짱구1.jpg')
    }

    return(<>
        <h2>일반적인 JS 방법</h2>
        <input id="msg"/> <br/>
        <button type="button" onClick={입력함수}>입력</button>

        <h2>리액트 JS 방법</h2>
        <input value={msg} onChange={입력함수2}/>

        <h2>리액트 이미지 변경</h2>
        <img onClick={변경함수3} src={image}/>
        <img onClick={() => {setImage(image == '짱구1.jpg' ? '짱구2.jpg' : '짱구1.jpg')}} src={image}/>
        

    </>)
}

/*
    HTML 이벤트 함수 / onXXX 함수 제공, 이벤트리스너
        (1) 종류
            onClick : HTML 마크업에 클릭했을 때 클릭 이벤트 함수 실행
            onChange : HTML 마크업에 값이 변경되었을 때 이벤트 함수 실행
            ...
        (2) 반환 제공
            이벤트 함수가 실행된 결과를 객체로 다음 로직으로 반환된다
            onClick = (e) => {}
                실행결과를 e(매개변수)로 다음 함수에게 전달

    HTML 이벤트 함수 vs JSX(리액트) 이벤트 함수 차이점
        리액트에서는 카멜표기법 사용
        함수 호출이 아닌 함수명을 표시한다 (소괄호 사용x)
            onClick = {함수명}
        결과 리턴
        
        
*/