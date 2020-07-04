import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import Footer from './components/templete/Footer';
import './App.scss';
import 'antd/dist/antd.css';

const App = () => {
    return (
        <BrowserRouter>
            <Router />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
