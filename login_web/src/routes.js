import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from './pages/Main';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Main}/>
            <Route path="/Cadastro" component={Cadastro}/>
            <Route path="/Login" component={Login}/>
        </BrowserRouter>
    );
}