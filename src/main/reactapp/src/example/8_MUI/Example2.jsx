// JOY UI
// npm install @mui/joy @emotion/react @emotion/styled
import { useState } from 'react';

import Table from '@mui/joy/Table';

import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

import { BarChart } from '@mui/x-charts/BarChart';

import { LineChart } from '@mui/x-charts/LineChart';

export default function Example2(){
    const [open, setOpen] = useState(false);

    return(<>
        <h2>테이블</h2>
        <Table aria-label="basic table">
            <thead>
                <tr>
                    <th>제목</th><th>작성자</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>안녕</td><td>어ㅏㄴ녕</td></tr>
                <tr><td>안녕</td><td>어ㅏㄴ녕</td></tr>
            </tbody>
        </Table>
        <hr />
        <Table aria-label="basic table">
        <thead>
            <tr>
            <th style={{ width: '40%' }}>Dessert (100g serving)</th>
            <th>Calories</th>
            <th>Fat&nbsp;(g)</th>
            <th>Carbs&nbsp;(g)</th>
            <th>Protein&nbsp;(g)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td onClick={() => setOpen(true)}>Frozen yoghurt</td>
            <td>159</td>
            <td>6</td>
            <td>24</td>
            <td>4</td>
            </tr>
            <tr>
            <td>Ice cream sandwich</td>
            <td>237</td>
            <td>9</td>
            <td>37</td>
            <td>4.3</td>
            </tr>
        </tbody>
        </Table>


        <h2>모달</h2>
        <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
            모달창 열기 true : 열린상태 / false : 닫힌 상태
        </Button>
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => setOpen(false)}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Sheet
            variant="outlined"
            sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
            >
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <Typography
                component="h2"
                id="modal-title"
                level="h4"
                textColor="inherit"
                sx={{ fontWeight: 'lg', mb: 1 }}
            >
                모달 제목입니다
            </Typography>
            <Typography id="modal-desc" textColor="text.tertiary">
                모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 
            </Typography>
            </Sheet>
      </Modal>


      <h2>차트</h2>
        <BarChart
            xAxis={[{ scaleType: 'band', data: ['인사팀', '영업팀', '개발팀'] }]}
            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
            width={500}
            height={300}
        />
        
        <LineChart
            xAxis={[{ scaleType: 'band', data: ["2023", "2024", "2025", 3, 7, 1] }]}
            series={[
            {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
            ]}
            width={500}
            height={300}
        />

    </>)
}