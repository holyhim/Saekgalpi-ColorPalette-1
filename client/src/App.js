import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HeaderRouter from './router/HeaderRouter';
import BodyRouter from './router/BodyRouter';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <header>
                <HeaderRouter />
            </header>
            <main>
                <BodyRouter />
            </main>
            <footer> {/*푸터의 템플릿이 들어가는 자리입니다.*/} </footer>
        </BrowserRouter>
    );
};

export default App;
