import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"


export default function Signup(props){
    // (1) 입력받은 값들을 저장하는 state 변수 선언
        // const [변수명, set변수명] = useState(초기값)
        // setXXX(새로운주소값)
        // memberinfo는 일반적으로 (자바)memberDto의 멤버변수와 동일하게 입력
    const [memberInfo, setMemberInfo] = useState({mid : "", mpwd : "", mname : ""})

    // (2) 입력받은 값들을 state에 랜더링하는 함수
        // event : onChange의 결과정보 / event.target : 해당 함수를 실행시킨 마크업
    const onInputChange = (event) => { 
        setMemberInfo({...memberInfo, [event.target.name] : event.target.value})
    }


    // (3) 입력받은 첨부파일
    // (*) 첨부파일의 미리보기로 변경
    const [profile, setProfile] = useState(null); // 업로드 파일을 파일 객체로 저장하는 state 변수
    const [preview, setPreview] = useState(null); // 업로드 파일을 바이트로 저장하는 state 변수
    const onFileChange = (event) => {
        console.log(event.target.files[0]);// 사용자가 입력한 파일 반환 // JS에서 File 클래스 제공
            // (변경전)setMemberInfo({...memberInfo, "uploadfile" : event.target.files[0]}) //사용자가 입력한 파일 객체를 state에 대입
        // 1. 업로드된 파일 반환
        const file = event.target.files[0];

        // 2. state 저장
        setProfile(file);

        // 3. *선택사항* 이미지 미리보기(업로드와 다름)
        if(file){
            // 4. 파일 읽기 객체 만들기
            const reader = new FileReader(); // JS 객체 : 파일 읽기 객체

            // 5. 파일 읽기 메소드 정의 / reader.onloadend( () => {파일을 읽을 때 실행할 코드})
            reader.onloadend = () => {
                console.log(reader.result); // 읽어들인 파일을 출력 / reader.result : 가져온 파일의 결과물(바이트)
                setPreview(reader.result);
            }

            // 6. 파일 읽기
            reader.readAsDataURL(file); // 읽어들인 파일 대입 / reader.readAsDataURL(file객체)
        }else{ // 파일이 없으면
            setPreview(null);
        }
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
        // * 만약 첨부파일이 존재하면 첨부파일을 추가
        if(profile){ 
            formData.append('uploadfile', profile);
        } // 존재하지 않으면 전송x

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
    <div id="container">
        <h3>회원가입</h3>
        <form>
            아이디<br />
            <input type="text" name="mid" value={memberInfo.mid} onChange={onInputChange} /> <br /><br />

            비밀번호<br />
            <input type="password" name="mpwd" value={memberInfo.mpwd} onChange={onInputChange} /> <br /><br />

            닉네임<br />
            <input type="text" name="mname" value={memberInfo.mname} onChange={onInputChange} /> <br /><br />

            프로필<br />
            <input type="file" accept="image/*" onChange={onFileChange}/><br /><br />

            프로필 미리보기<br />
            {preview && (<>
                <img src={preview}
                     style={{width:"100px"}}
                />
            </>)} <br /><br />

            <button type="button" onClick={onSignup} className="signupBtn">회원가입</button>
        </form>
    </div>
    </>)
}
