import React, {useEffect, useState} from 'react';
import './App.css';
import './varaiable.css';
import ProgressBar from './Components/ProgressBar/ProgressBar';
import CustomAlert from './Components/Alerts/CustomAlert';
import {Service} from './Services/Service';
import {useLocation} from 'react-router';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Router from "./Routes/Router";
import {Grid} from "@mui/material";


function App({isLogin}) {
    const {pathname} = useLocation();
    const [drawerOpened, isDrawerOpened] = useState(false);

    useEffect(() => {
        console.log(pathname);
    }, [pathname])

    useEffect(() => {
        Service();
    }, [])

    return (
        <div>
            <ProgressBar/>
            <CustomAlert/>
            <Grid container container spacing={2}>
                <Grid item xs={12} style={{height:"60px"}}>
                    <Header/>
                </Grid>
                <Grid item xs={12}>
                    {/*<div className="App">*/}
                        <Router/>
                    {/*</div>*/}
                </Grid>
            </Grid>
            <Footer/>
        </div>

    );
}


export default (App);

