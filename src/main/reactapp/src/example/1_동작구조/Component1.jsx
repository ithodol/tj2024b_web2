/*
    [1] 컴포넌트 만들어서 랜더링 해보기
        1. 지정한 폴더에 첫글자를 대문자로 하여 .js 또는 .jsx(권장) 확장자 파일을 만든다
        2. 함수형 컴포넌트(권장) vs 클래스형 컴포넌트
        3. return 에서 jax(HTML과 JS가 합쳐진) 문법을 활용하여 화면을 구현한다
            JSP(HTML과 JAVA가 합쳐진)
        4. 함수형 컴포넌트 반환한다 export default 컴포넌트명;
*/

// import React from "react";
// JS에서는 필수 입력
// JSX(17이상)에서는 생략 가능

function Component1() {
    return <div>내가 만든 컴포넌트</div>
}

export default Component1;