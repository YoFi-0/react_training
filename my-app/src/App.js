
import React from "react";
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Home from './RouteHome'
import FunctionComponent from './Function';
import ClassComponent from './Class'

const App = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/function" element={<FunctionComponent/>} exact/>
                <Route path="/class" element={<ClassComponent/>} exact/>
            </Routes>
        </BrowserRouter>
    )
}

export default App