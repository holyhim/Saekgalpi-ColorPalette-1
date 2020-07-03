import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import Footer from './components/templete/Footer';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Router />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
