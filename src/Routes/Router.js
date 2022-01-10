import React from 'react';
import {connect} from "react-redux";
import {Routes, Route} from "react-router-dom";
import MainDashboard from "../Pages/MainDashboard/MainDashboard";
import SignIn from "../Pages/SignIn/SignIn";
import Signup from "../Pages/Signup/Signup";
import NotFound from "../Pages/NotFound/NotFound";
import Sidebar from "../Components/Sidebar/Sidebar";
import Grid from "@mui/material/Grid";
import Company from "../Pages/Sample/Sample";

const Router = ({isLogin, showSideBar}) => {
    return (
        <>
            {
                isLogin ?
                    <>
                        <Grid container spacing={2}>
                            <Grid item xs={showSideBar ? 2 : 0}>
                                <Sidebar/>
                            </Grid>
                            <Grid item xs={showSideBar ? 10 : 12}>
                                <Routes>
                                    <Route  path="dashboard" element={<MainDashboard />}/>
                                    <Route  path="company" element={<Company/>} />
                                    <Route path="*" element={<NotFound/>}/>
                                </Routes>
                            </Grid>
                        </Grid>

                    </>
                    :
                    <Routes>
                        <Route exact path="/signin" element={<SignIn/>}/>
                        <Route exact path="/signup" element={<Signup/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
            }
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        isLogin: state.User.isLogin,
        showSideBar: state.Settings.sideNavStatus
    }
};


export default connect(mapStateToProps)(Router)
