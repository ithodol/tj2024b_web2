/*
    리액트 과제 1 : 아래 코드들을 사용하여 결과 예시 구현
*/

const ProductCard = ( props ) => {
    return (<>
        <Task></Task>
    </>);
};
import './Task.css'
export default function Task( props ) {
const products = [
    { title: "무선 키보드", price: 45000, inStock: true },
    { title: "게이밍 마우스", price: 32000, inStock: false },
    { title: "27인치 모니터", price: 280000, inStock: true }
];


return (<>
            {
                products.map((product, index) => (
                        <div className="box" key={index}>
                            <div className="title">{product.title}</div>
                            <div className="price">가격 : {product.price}</div>
                            <div className="inStock">{product.inStock == true ? <div className='count1'>재고 있음</div> : <div className='count2'>재고없음</div>}</div>
                        </div>
                ))
            }
        
        
</>);
}
