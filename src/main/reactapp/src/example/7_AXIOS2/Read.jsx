import { useEffect, useState} from "react"
import axios from "axios";

export default function Read(props){
    // [1] 컴포넌트 최초 실행될 때 최초 1번 실행하는 생명주기 함수
    useEffect(() => {
        console.log('컴포넌트 최초 실행시 1번 호출')
        onRead(); // 컴포넌트가 열릴 때 axios 통신하여 데이터를 가져온다
    }, [])


    // [2] axios 이용하여 서버와 통신한다
    const onRead = async () => {
        const response = await axios.get('http://192.168.40.10:8080/day08/products')
        console.log(response.data);
        setProducts(response.data); // 서버로부터 받은 모든 제품정보를 상태변수에 저장한다
    }

    // [3] 서버로부터 받은 결과를 저장하는 상태 변수
    const[products, setProducts] = useState([])
    console.log(products);


    return(<>
        <div>
            <h2>Read 페이지</h2>
            <table>
                <thead>
                    <tr>
                        <th>번호</th><th>제품명</th><th>제품설명</th><th>제품가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            return(<tr>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.comment}</td>
                                <td>{product.price}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>

        </div>
    </>)
}