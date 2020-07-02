import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import './App.css';
import Footer from './components/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <Router />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
