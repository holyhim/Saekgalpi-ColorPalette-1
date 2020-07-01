import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EditProfile from '../pages/EditProfile';
import EditPalette from '../pages/EditPalette';
import MakePalette from '../pages/MakePalette';
import PaletteDetail from '../pages/PaletteDetail';

export default () => (
    <Router>
        {/* 바디 템플릿 넣어 주삼 */}
        <Switch>
            <Route path='/editProfile/:id' component={EditProfile} />
            <Route path='/editPalette/:id' component={EditPalette} />
            <Route path='/makePalette' component={MakePalette} />
            <Route path='/paletteDetail/:id' component={PaletteDetail} />
        </Switch>
    </Router>
);

//서버팀에게 요청 : 라우팅 할 때 아이디 값 params 고려해 주세요
