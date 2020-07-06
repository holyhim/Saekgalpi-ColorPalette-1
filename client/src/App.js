import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import Footer from './components/templete/Footer.js';

import './scss/config/App.scss';
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
