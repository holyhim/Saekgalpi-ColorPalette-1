import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Router />
            <footer> {/*푸터의 템플릿이 들어가는 자리입니다.*/} </footer>
        </BrowserRouter>
    );
};

export default App;
