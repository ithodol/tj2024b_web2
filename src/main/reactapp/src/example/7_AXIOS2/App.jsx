import {BrowserRouter, Route, Routes}from 'react-router-dom';

/* 라우터로 연결할 컴포넌트 import */
import Home from './Home.jsx'
import Create from './Create.jsx'
import Read from './Read.jsx'
import Update from './Update.jsx'
import Delete from './Delete.jsx'
import SideBar from './SideBar.jsx'
/* CSS import */
import './app.css';

// App.jsx : 라우터(가상URL)이용한 라이딩
export default function App(props){ // 컴포넌트
    return(<>
        <BrowserRouter> {/* 모든 라우터를 감싼다 */}
            <div id='wrap'>
                <SideBar/>

                <Routes>
                    <Route path="/" element={<Home/>}/> {/* 각 가상의 URL을 정의한다 컴포넌트 연결 */}
                    <Route path="/create" element={<Create/>}/> {/* 각 가상의 URL을 정의한다 컴포넌트 연결 */}
                    <Route path="/read" element={<Read/>}/> {/* 각 가상의 URL을 정의한다 컴포넌트 연결 */}
                    <Route path="/update" element={<Update/>}/> {/* 각 가상의 URL을 정의한다 컴포넌트 연결 */}
                    <Route path="/delete" element={<Delete/>}/> {/* 각 가상의 URL을 정의한다 컴포넌트 연결 */}
                </Routes>
            </div>

        </BrowserRouter>
    </>)
}