import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home.jsx';
import Bcreate from './Bcreate.jsx';
import Bread from './Bread.jsx';
import Bupdate from './Bupdate.jsx';
import Bview from './Bview.jsx';
import Rcreate from './Rcreate.jsx';
import Rread from './Rread.jsx';
import SideBar from './SideBar.jsx';

import'./app.css'

export default function App(props){
    return(<>
    <BrowserRouter>
        <div id = "wrap">
            <SideBar/>
            <Routes> 
                <Route path='/' element={<Home />} /> {}
                <Route path="/bcreate" element={<Bcreate />} />{}
                <Route path="/bread" element={<Bread />} />{} 
                <Route path="/bupdate" element={<Bupdate />} />
                <Route path="/bview" element={<Bview />} />
                <Route path="/rcreate" element={<Rcreate />} />{}
                <Route path="/rread" element={<Rread />} />{} 
            </Routes>
        </div>
    </BrowserRouter>
    </>)
}