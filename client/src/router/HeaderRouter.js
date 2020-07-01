import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main';
import MyPage from '../pages/MyPage';
import AllPalette from '../pages/AllPalette';
import MainHeader from '../components/MainHeader';
import SubHeader from '../components/SubHeader';

export default () => (
    <Router>
        <MainHeader />
        <SubHeader />
        <Switch>
            <Route path='/signIn' component={SignIn} />
            <Route path='/signUp' component={SignUp} />
            <Route path='/allPalette' component={AllPalette} />

            <Route path='/MyPage' component={MyPage} />

            <Route path='/' component={Main} exact />
        </Switch>
    </Router>
);
