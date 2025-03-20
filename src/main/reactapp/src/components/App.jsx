// 리액트 실행시 최초로 열리는 컴포넌트로 사용할 예정
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Signup from './member/Signup'
import Login from './member/Login'

// import할 때 export default 적용된 자료는 { } 생략 가능
// 여러개를 가져오거나 default가 아닌 자료는 { } 사용해야함
import { store, persistor } from './reduxs/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


export default function App(Props){
    return(<>
        <Provider store = {store}> {/* 리덕스 스토어 적용 : 현재 Provider로 감싼 컴포넌트 모두 리덕스 전역상태 사용 가능 */}
            <PersistGate persistor={persistor} loading={null}>{/* 퍼시스턴스 적용할 컴포넌트를 모두 감싼다 */}
                <BrowserRouter> {/* 모든 라우팅을 감싼다 */}
                    <div id='wrap'>
                        <Header/> {/* Routes 밖에 있으면 고정 */}
                        <Routes> {/* Routes 안에 있으면 전환 */}
                            <Route path='/' element={<Home/>}></Route>
                            <Route path='/member/signup' element={<Signup/>}></Route>
                            <Route path='/member/login' element={<Login/>}></Route>
                        </Routes>
                        <Footer/> {/* Routes 밖에 있으면 고정 */}
                    </div>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </>)
}