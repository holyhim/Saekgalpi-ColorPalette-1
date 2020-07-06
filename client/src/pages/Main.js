import React from 'react';
import { Link } from 'react-router-dom';
import PaletteList from '../components/palette/PaletteList';
import RandomColorList from '../components/palette/RandomColorList';
import './Main.scss';
import { Button } from 'antd';
import styd from 'styled-components';

const SubHeaderButton = styd(Button)`
color: #a6a6a6;
background-color: #e7e7e7;
border: 1px solid #e7e7e7;
margin: 10px;
margin-bottom: 120px;
width: 840px;
height: 100px;
font-size: 3em;
transition: all .3s;
&:hover{
    background-color: #e7e7e7;
    border: 1px solid #e7e7e7;
    color: #5d5d5d;
}

`;

const Main = () => {
    // TODO: 메인 페이지 들어오자마자 팔레트 정보 불러오기 GET 요청 (useEffect, axios)

    return (
        <main className='main__main-content'>
            <SubHeaderButton>
                <Link to='/makePalette'>내 색갈피 만들기</Link>
            </SubHeaderButton>
            <section className='fav-palettes__container'>
                <h3 className='fav-palettes__title'>인기순 색갈피</h3>
                <PaletteList />
            </section>
            <section className='current-palettes__container'>
                <h3 className='current-palettes__title'>
                    최근에 올라온 색갈피
                </h3>
                <PaletteList />
            </section>
            <section className='random-colors__container'>
                <h3 className='random-colors__title'>랜덤컬러 생성기</h3>
                <RandomColorList />
            </section>
        </main>
    );
};

export default Main;
