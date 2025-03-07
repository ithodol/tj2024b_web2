/*


*/
import { BrowserRouter , Routes , Route , Link, useNavigate } from 'react-router-dom';

function Home(props){ return(<> 메인페이지 </>) }
function About(props){ return(<> 소개페이지 </>) }

import { useSearchParams, useParams} from 'react-router-dom';
function MyPage(props){
    /*
        // 기존 쿼리스트링 방식
        const name = new URL(location.href).searchParams.get("name")
        const age = new URL(location.href).searchParams.get("age")
    */

    // 리액트 쿼리스트링 방식
        // 1. import { useSearchParams } from 'react-router-dom';
        // 2. const const[searchParams] = useSearchParams();
        // 3. const 변수명 = searchParams.get('key')
    const[searchParams] = useSearchParams(); // 쿼리스트링 가져오기
    const name = searchParams.get('name')
    const age = searchParams.get('age')

    return(<>
        <h3>마이페이지</h3>
        <p>이름 : {name || '정보 없음'}</p>
        <p>나이 : {age || '정보 없음'}</p>
    </>)
}


// 리액트 path 방식
function Product(props) {
    // 1. import{useParams} from 'react-router-dom'
    // 2. const{변수명1, 변수명2} = useParams();
        // queryString 방식 : localhost:5173?name=코카콜라&price=1500   => useSearchParams()
        // path 방식 : localhost:5173/product/코카콜라/1500             => useParams()
    const {name, price} = useParams();
    return(<>
        <h3>제품 상세 페이지</h3>
        <p>제품명 : {name || '정보 없음'}</p>
        <p>가격 : {price || '정보 없음'}</p>
    </>)
    
}
// HTTP 404 오류는 '경로가 존재하지 않다'
function Page404(props){
    // (1) 기존방식 : location.href=''
    const onHome1 = () => (location.href='/')
    // (2) 리액트 라우트 방식 : useNavigate();
        // 1. import { useNavigate } from 'react-router-dom';
        // 1. const navigate = useNavigate();
        // 3. navigate('이동할경로')
    const navigate = useNavigate();
    const onHome2 = () => (navigate('/'))



    return (<>
        <h3>존재하지 않는 페이지</h3>
        <button onClick={onHome1}>홈1(location)</button> <br/>
        <button onClick={onHome2}>홈2(nav)</button> <br/>
        <a href='/'>홈3(a)</a> <br/>
        <Link to="/">홈3(Link)</Link> <br/>
    </>)
}



// 전체를 연결하는 컴포넌트 = 라우터 컴포넌트
export default function App(props){
    return(<>
        <BrowserRouter>
            <ul>
                <a href='/'>메인페이지(HOME / get 방식)</a> <br/>
                <Link to="/">메인페이지(HOME / 라우터 방식)</Link> <br/>
                <Link to="/about">소개페이지(About)</Link> <br/>
                <Link to="/mypage?name=유재석&age=40">마이페이지(MyPage)</Link> <br/>
                <Link to="/product/cola/1500">제품상세</Link>
            </ul>
            
            <Routes>
                <Route path="/" element = {<Home/>} /> {/* localhost : 5137 요청 -> 해당 컴포넌트가 열린다 */}
                <Route path="/about" element = {<About/>} /> {/* localhost : 5137/about 요청 -> 해당 컴포넌트가 열린다 */}
                <Route path="/mypage" element = {<MyPage/>} /> {/* localhost : 5137/mypage 요청 -> 해당 컴포넌트가 열린다 */}
                <Route path='/product/:name/:price' element={<Product/>}></Route>
                <Route path='*' element={<Page404/>}></Route> {/* 만약 존재하지 않는 가상 URL 요청하면 Page404 컴포넌트가 열린다 */}
            </Routes>
        </BrowserRouter>
    </>)
}