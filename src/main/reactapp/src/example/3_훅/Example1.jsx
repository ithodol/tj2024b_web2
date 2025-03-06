 let a = 0 // 전역변수
 // 기본값으로 내보낼 컴포넌트
export default function Example1(props) {
    let b = 0 // 지역변수
    ++a;    // a에 1증가
    ++b;    // b에 1증가

    // 증가함수
    const 증가함수 = () => {
        ++a;
        ++b;
        // innerHTML 하지 않았기 때문
        console.log(a); // 결과 = 3
        console.log(b); // 결과 = 3
        // 랜더링[새로고침]이 필요하다. 왜? 함수는 1번의 return을 하기 때문
            // => return된 JSX는 불변성이다.
                // => return된 JS내 변수값이 변경되어도 HTML에는 변화가 없다.
    }

    return (<>
        <div>{++a}</div> {/* 결과 = 2 */}
        <div>{++b}</div> {/* 결과 = 2 */}
        <button type="button" onClick={증가함수}>증가함수</button>
    </>)
}