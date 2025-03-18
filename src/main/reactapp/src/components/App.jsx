// 리액트 실행시 최초로 열리는 컴포넌트로 사용할 예정
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Signup from './member/Signup'
import Login from './member/Login'


export default function App(Props){
    return(<>
        <BrowserRouter> {/* 모든 라우팅을 감싼다 */}
            <div id='wrap'>
                <Header/> {/* Routes 밖에 있으면 고정 */}
                <Routes> {/* Routes 안에 있으면 전환 */}
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/member/signup' element={<Signup/>}></Route>
                    <Route path='/member/login' element={<Login/>}></Route>

                </Routes>
                <Footer/>
            </div>

        </BrowserRouter>
    </>)
}