import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";


export default function Header(props){
    return(<>
        <div className="headerBox">
            <ul className="header">
                <li>
                    <Link to={"/member/signup"}>
                        <FontAwesomeIcon icon={faUserPlus} className="faUserPlus" />&nbsp; 회원가입
                    </Link>
                </li>
                <li>
                    <Link to={"/"}>
                        <FontAwesomeIcon icon={faHouse} className="home" />&nbsp; 홈
                    </Link>
                </li>
                <li>
                    <Link to={"/member/login"}>
                        <FontAwesomeIcon icon={faCircleUser} className="faCircleUser" />&nbsp; 로그인
                    </Link>
                </li>
            </ul>
        </div>
    </>)
}