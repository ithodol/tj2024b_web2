import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"


export default function Signup(props){
    // (1) 입력받은 값들을 저장하는 state 변수 선언
        // const [변수명, set변수명] = useState(초기값)
        // setXXX(새로운주소값)
        // 
    const [memberInfo, setMemberInfo] = useState({mid : "", mpwd : "", mname : "", uploadfile : null})

    // (2) 입력받은 값들을 state에 랜더링하는 함수
        // event : onChange의 결과정보 / event.target : 해당 함수를 실행시킨 마크업
    const onInputChange = (event) => { 
        setMemberInfo({...memberInfo, [event.target.name] : event.target.value})
    }


    // (3) 입력받은 첨부파일
    const onFileChange = (event) => {
        console.log(event.target.files[0]);// 사용자가 입력한 파일 반환 // JS에서 File 클래스 제공
        // memberinfo는 일반적으로 (자바)memberDto의 멤버변수와 동일하게 입력
        setMemberInfo({...memberInfo, "uploadfile" : event.target.files[0]}) //사용자가 입력한 파일 객체를 state에 대입
    }
    console.log(memberInfo);


    const navigate = useNavigate();
    // (4) 입력받은 값들을 axios로 보내고 응답받기
    const onSignup = async () => {
        // 1. formdata 객체 만들기
            // 만드는 이유 : json과 다르게 문자열 전송이 아닌 바이트(바이너리) 전송을 하기 위함
        const formData = new FormData()

        // 2. formdata에 속성 넣고, .append('속성명', 값)
        formData.append('mid', memberInfo.mid);
        formData.append('mpwd', memberInfo.mpwd);
        formData.append('mname', memberInfo.mname);
        formData.append('uploadfile', memberInfo.uploadfile);
        
        console.log(formData);
        // 3. axios에서 사용할 http 헤더 정보, axios에서는 application/jsn은 기본값이기 때문에 필요 없음
        const option = {headers : {"Content-Type" : "multipart/form-data"}}

        // 4. axios 동기
        const response = await axios.post('http://localhost:8080/api/member/signup', formData, option)

        // 5. 응답받기 / response.data
        const result = response.data

        // 6. 응답에 따른 처리
        if(result == true){
            alert('회원가입 성공');
            navigate("/member/login"); // location.href와 다르게 navigate는 새로고침 없음
        }else{
            alert('회원가입 실패');
        }
    }


    return(<>
        <h1>회원가입</h1>
        <form>
            아이디<br />
            <input type="text" name="mid" value={memberInfo.mid} onChange={onInputChange} /> <br />

            비밀번호<br />
            <input type="password" name="mpwd" value={memberInfo.mpwd} onChange={onInputChange} /> <br />

            닉네임<br />
            <input type="text" name="mname" value={memberInfo.mname} onChange={onInputChange} /> <br />

            프로필<br />
            <input type="file" accept="image/*" onChange={onFileChange}/><br />

            <button type="button" onClick={onSignup}>회원가입</button>
        </form>
    </>)
}
