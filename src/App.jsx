import React from 'react';
import styles from './App.module.css'
import {Routes, Route} from 'react-router-dom'
import Main from "./pages/main/main";
import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";
import Container from "@mui/material/Container";

const App = () => {
    return (
        <>
            <Container fixed>
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/registration" element={<Registration />}/>
                </Routes>
            </Container>
        </>
    );
};

export default App;