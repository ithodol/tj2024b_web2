// (1) 함수 선언
//      function 

// (2) 컴포넌트명을 정의한다. (** 첫글자 대문자 **)

// (3) 매개변수는 props 필수로 한다 (생략 가능)
//      (props) {}

// (4) JSX 문법 작성
//      { return JSX문법 }

// (5) 여러 컴포넌트 중에서 import할 경우 반환할 컴포넌트를 정의한다
//      export default 반환할컴포넌트명;

// [1] 기본 컴포넌트
function Component2 (props) {
    return <div><Header/>메인 페이지<Footer/></div>
}
export default Component2;

// [2] 그 외 컴포넌트
    // 헤더
function Header(props){
    return <div>헤더 메뉴</div>
}
    // 푸터
function Footer(props){
    return <div>푸터 메뉴</div>
}