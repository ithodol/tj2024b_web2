import * as React from 'react';
import axios from 'axios';
import './timetable.css';
import Table from '@mui/joy/Table';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

{/*function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
*/}

function MyTable(props){
    return(<>
        <table>
            <thead>
                <tr>
                    <th>번호</th><th>출발일자</th><th>출발시간</th><th>차량정보</th><th>운전기사</th><th>비고</th>
                </tr>
            </thead>
            <tbody> {/* 샘플 */}
                <tr className='bodyTr'>
                    <td>1</td><td>2020.02.20</td><td>06:00</td><td>39서2934</td><td>전은서</td>
                    <td><button type='button'>상세조회</button></td>
                </tr>
                <tr className='bodyTr'>
                    <td>1</td><td>2020.02.20</td><td>06:00</td><td>39서2934</td><td>전은서</td>
                    <td><button type='button'>상세조회</button></td>
                </tr>
                <tr className='bodyTr'>
                    <td>1</td><td>2020.02.20</td><td>06:00</td><td>39서2934</td><td>전은서</td>
                    <td><button type='button'>상세조회</button></td>
                </tr>
                <tr className='bodyTr'>
                    <td>1</td><td>2020.02.20</td><td>06:00</td><td>39서2934</td><td>전은서</td>
                    <td><button type='button'>상세조회</button></td>
                </tr>
                <tr className='bodyTr'>
                    <td>1</td><td>2020.02.20</td><td>06:00</td><td>39서2934</td><td>전은서</td>
                    <td><button type='button'>상세조회</button></td>
                </tr>
                <tr className='bodyTr'>
                    <td>1</td><td>2020.02.20</td><td>06:00</td><td>39서2934</td><td>전은서</td>
                    <td><button type='button'>상세조회</button></td>
                </tr>
                <tr className='bodyTr'>
                    <td>1</td><td>2020.02.20</td><td>06:00</td><td>39서2934</td><td>전은서</td>
                    <td><button type='button'>상세조회</button></td>
                </tr>
                <tr className='bodyTr'>
                    <td>1</td><td>2020.02.20</td><td>06:00</td><td>39서2934</td><td>전은서</td>
                    <td><button type='button'>상세조회</button></td>
                </tr>
                <tr className='bodyTr'>
                    <td>1</td><td>2020.02.20</td><td>06:00</td><td>39서2934</td><td>전은서</td>
                    <td><button type='button'>상세조회</button></td>
                </tr>
                <tr className='bodyTr'>
                    <td>1</td><td>2020.02.20</td><td>06:00</td><td>39서2934</td><td>전은서</td>
                    <td><button type='button'>상세조회</button></td>
                </tr>
            </tbody>
        </table>
    </>)
}
export { MyTable };

function Page(props){
    return(<>
        <Stack spacing={2} className='page'>
            <Pagination count={10} shape="rounded" />
        </Stack> {/* https://i-ten.tistory.com/253 */}
    </>)
}
export { Page };





export default function TviewBus(props){

      

    return(<>
            <div id="container"> 
                <h1> 버스별 조회 </h1>
                <div className='pickContent'>
                    <div className='pickTop'>
                        <div className='pickTit'>차량정보</div>
                        <select className='pickList'>
                            <option>선택</option>
                            <option value="">00아 0000</option>
                            <option value="">00서 0000</option>
                            <option value="">00아 0000</option>
                            <option value="">00서 0000</option>
                        </select>
                    </div>
                    <MyTable/>
                    <Page/>
        
{/*
                    <Table hoverRow>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>출발일자</th>
                                <th>출발시간</th>
                                <th>운전기사</th>
                                <th>비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                            <tr key={row.name}>
                                <td>{row.name}</td>
                                <td>{row.calories}</td>
                                <td>{row.fat}</td>
                                <td>{row.carbs}</td>
                                <td>{row.protein}</td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
*/}
                </div>
            </div>
    
    </>)
}