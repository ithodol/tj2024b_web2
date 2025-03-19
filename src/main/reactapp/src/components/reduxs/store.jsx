import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'


// (1) 리덕스 store 만들기
// (2) 변수에 configureStore 함수를 대입한다
// (3) configureStore 함수의 매개변수에 리듀서 정의/등록
// (4) { reducer : { 리듀서명1 : 등록할리듀서1, 리듀서명2 : 등록할리듀서2 } }
export const store = configureStore({
    reducer : {user : userReducer}
})
// (5) export로 store 내보내기
export default store;