import { useState } from "react";

let a = 0 // 전역변수

export default function Example2(props){
    a++;
    let b = 0
    b++;

    console.log(`전역변수 a : ${a}`)
    console.log(`지역변수 b : ${b}`)

    // (1) 전역변수/지역변수 증가하는 함수
    const 증가함수1 = () => {
        a++; b++;
        console.log(a, b);
    }
// (3) state 변수 사용 / 훅 종류 중 핵심 함수 -> useState / 파일 상단에 import { useState } from "react"; 입력
    let c = useState(0)
    console.log(c); // 결과 = 2개를 갖는 배열로 반환됨 => [0] 변수값, [1] 변수값 수정할 수 있는 함수 제공 -> 
    console.log(c[0]); // 결과 = 0
    console.log(c[1]); // 결과 = 함수!@@$#@

    const 증가함수2 = () => {
        c[1](c[0]++); // 실행시 컴포넌트 재실행됨 -> return 실행.
        // 전역변수는 컴포넌트 재실행(랜더링) 밖에 있기 때문에 누적됨
        // 지역변수는 컴포넌트 재실행(랜더링) 안에 있기 때문에 초기화됨
        // state변수(의존성 변수) = 지역/전역변수의 개념이 아닌 react가 별도로 상태(값)를 저장하고 관리하는 역할을 함
    }

    // (4) state 일반적인 사용법, 구조 분해
    // const{변수명, set변수명} = useState(0);
    let [count, setCount] = useState(0);

    const 증가함수3 = () => {
        console.log(count); // 결과 = 0
        count = count + 1; // 결과 = 1씩 증가 // const는 ++ or 수정 불가능 => setCount(count+1); 해야함
        console.log(count);
        // 랜더링 제공
        setCount(count);  //setXXX(새로운값)
    }


    // 컴포넌트(함수) : 1번의 return된 JSX문법의 결과(HTML)는 불변성이다
    return(<>
            <div>
                <p>일반 변수 : {a}, {b} </p>
                <button type="button" onClick={증가함수1}>증가함수</button>
            </div>
            <div>
                <p>state 변수 : {c}</p>
                <button type="button" onClick={증가함수2}>증가함수2</button>
            </div>
            <div>
                <p>state변수2 : {count}</p>
                <button type="button" onClick={증가함수3}>증가함수3</button>
            </div>
    </>)
}
/*
    변수 : 하나의 자료를 저장할 수 있는 메모리 공간
    리터럴 : 자료 그자체
        let a = 10;
        let b = 10;
        let c = 20;
            변수 3개 / 자료 2개
        let d = a + 1
            변수 4개 / 자료 3개
        ======================
        let f = 10 + 1 / 2개의 자료를 연산하여 새로운 1개의 자료로 만들었다
            변수 1개 / 자료 1개
    연산 : 하나 이상의 값(피연산자)를 정해진 기호(연산자)로 계산했을 때 **하나의 결과를 도출**

*/