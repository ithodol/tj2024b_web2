
// MUI : 리액트.js 기반의 미리 만드러진 컴포넌트를 제공하는 회사명 (부트스트랩과 유사함)

// 1. MUI 제공하는 컴포넌트 파트 : 1.Material UI / 2.JOY UI / 3.MUI / 4.


// 2. Material UI 설치
// (1)


// * 리액트(node.js) 환경에서 외부 라이브러리 다운로드 받는 방법
// 터미널 서버가 꺼져있는 상태에서
// 1. 리액트 최상위 패키지에서 통합 터미널 열기
// 2. 설치할 라이브러리 npm 코드 입력
// 협업시 팀원1이 라이브러리 설치 후 나머지 팀원들은 npm install만 하면 됨

// 3. Material UI에서 사용하고 싶은 컴포넌트 코드 가져오기
import * as React from 'react';

import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


export default function Example1(){
    // List
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    

    return(<>
    <h2>버튼</h2>
        <Button variant="outlined">MUI 버튼</Button>
        <button>HTML 버튼</button>

    <h2>별점</h2>
        <Rating name="read-only" value={3} readOnly />

    <h2>select</h2>
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">부서</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" label="부서">
            <MenuItem value={"인사팀"}>인사팀</MenuItem>
            <MenuItem value={"영업팀"}>영업팀</MenuItem>
            <MenuItem value={"개발팀"}>개발팀</MenuItem>
        </Select>
    </FormControl>

    <h2>List</h2>
    
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="버스 관리" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="ㅇㅇ 관리" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="스케줄 관리" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    </>)
}