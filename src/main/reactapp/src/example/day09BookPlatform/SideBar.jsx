import { Link } from "react-router-dom"
export default function SideBar(props){
    return(<>
        <div >
            <ul id='sideMenu'>
                <li>도서 추천</li>
                <li><Link to = "/">홈</Link></li>
                <li><Link to = "/bcreate">도서 등록</Link></li>
                <li><Link to = "/bread">도서 목록</Link></li>
                <li><Link to = "/rcreate">리뷰 등록</Link></li>
                <li><Link to = "/rread">리뷰 목록</Link></li>
            </ul>
        </div>
    </>)
}