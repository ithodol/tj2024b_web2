// (1)
export default function 함수명(props) {
    // ========= JSX 문법 S =========
    return (
        <div>
            { /* 주석 내용 */}
            <h3>컴포넌트</h3>
            { /* 다른 컴포넌트 호출 */}
            <Component1 />
            <Component2 />
            <Component3 />
            <Component4 />
            <Component5 />
            <Component6 />
            <Component7 />
        </div>
    )
    // ========= JSX 문법 E =========
}

// (2)
function Component1(props) {
    return <h4>한줄 입력시 () 생략 가능</h4>
}

// (3)
function Component2(props) {
    return (
        <div>
            <h4>두줄 이상 입력시 () 필수</h4>
        </div>
    )
}

// (4)
function Component3(props) {
    return (
        <>
            <h4>div 대신해 이름 없는 마크업 사용 가능</h4>
        </>
    )
}

// (5)
function Component4(props){
    const name = '유재석'
    const age = 40;
    const obj = {name : '강호동', age : 50}

    return (
        <>
            <h4>{name}님의 나이 : {age}</h4>
            <h4>{obj.name}님의 나이 : {obj.age}</h4>
        </>
    )
}

// (6)
function Component5(props){
    const loginState = true; // 로그인 상태
    // JSX 문법에서는 {}표현식 if, for, function, const, let 불가능.
    return(
        <>
            <h4>{loginState == true ? '로그인 상태' : '비로그인 상태'}</h4>
            <h4>{loginState && <p>로그인 상태일 때만 보이는 메세지</p>}</h4>
        </>
    )    
}

// (7)
function Component6(props){
    const items = ['사과', '딸기', '바나나']
    // JSX 문법의 목록(li, option ...) 마크업들에는 key 속성 필요
        // => 리액트에서는 자동랜더링(새로고침)할 때 key 변화를 감지하여 변환된 key만 별도로 랜더링 하는 기능 포함
    // JSX 문법에서는 forEach 함수보다 map 함수를 자주 사용함
    return (
        <>
            <ul>
                {
                    items.map((item, index) => {
                        <li key={index}>{item}</li>
                    })
                }
            </ul>
        </>
    )
}

// (8)
// ** CSS 파일 import
// import '경로/파일명.css'
import './Example1.css'
function Component7 (props){
    // style 속성에 style="color:blue" [X]
    // style 속성에 style={ {CSS 객체} } [O] // ** 주의할점 : CSS 카멜표기법 사용 / 하이픈(-) 사용 불가
    const cssObj = {color : 'blue'}
    // class 속성이 아닌 calssName 사용
    return(
        <>
            <h4 style={{color : 'green'}}>인라인 형식의 CSS 넣기</h4>
            <h4 style={cssObj}>인라인 형식의 객체 CSS 넣기</h4>
            <h4 className="myclass">CSS 파일내 선택자를 이용한 CSS 넣기</h4>
        </>
    )
}
