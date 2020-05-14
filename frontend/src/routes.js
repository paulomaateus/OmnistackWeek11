import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';

import Logon from './pages/Logon';

export default function Routes(){
    return (
        <BrowserRouter>
        <switch>
            <Route path="/" component={Logon}/>
        </switch>
        </BrowserRouter>
    )
}