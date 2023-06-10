import React from 'react';
import './App.css';
import TopBar from "./Components/Navigation/TopBar";
import MainRouter from "./Components/Navigation/Routers/MainRouter";
import {
    BrowserRouter as Router,
} from "react-router-dom"
import {Box} from "@mui/material";
import {AdminProvider} from "./Functions/Hooks/AdminMode";

function App() {
    return <AdminProvider>
        <Router>
            <>
                <TopBar/>
                <Box sx={{m: 2}}>
                    <MainRouter/>
                </Box>
            </>
        </Router>
    </AdminProvider>
}

export default App;
