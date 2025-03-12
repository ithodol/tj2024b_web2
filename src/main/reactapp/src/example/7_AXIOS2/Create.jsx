import axios from "axios";
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

export default function Create(props){

    // [1] form 에서 입력받은 데이터들을 저장하는 상태 변수, 초기값 설정
    const [productForm, setProductForm] = useState({name : '', price : '', comment : ''})

    // [2] 입력 이벤트 만들기
    const onValueChange = (e) => { // e = event의 약어 / onChange의 결과정보를 매개변수로 받는다
        // 스프레드 연산자, {...기존객체, 새로운속성명 : 새로운값}
        setProductForm({...productForm, [e.target.name] : e.target.value }); 
    }

    
    // [3] 제품 등록 버튼을 클릭했을 때
    const navigate  = useNavigate();
    const onCreate = async () => {
        const response = await axios.post('http://192.168.40.10:8080/day08/products', productForm)
        if(response.data == true) {
            alert('제품 등록 성공');
            navigate('/read');
        }else{
            alert('제품 등록 실패');
        }
    }



    return(<>
        <div>
            <h2>Create 페이지</h2>
            <form>
                제품명 : <input type="text"  name='name' value={ productForm.name } onChange={ onValueChange }/> <br/>
                제품가격 : <input type="text"  name='price' value={ productForm.price } onChange={ onValueChange }/> <br/>
                제품설명 : <input type="text"  name='comment' value={ productForm.comment } onChange={ onValueChange }/> <br/>
                <button type="button" onClick={onCreate}>등록</button>
            </form>
        </div>
    </>)
}