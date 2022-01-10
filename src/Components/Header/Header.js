import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {connect} from "react-redux";
import {CssBaseline, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import Store from '../../Store';
import {ReducerTypes} from '../../Assets/Constants';
import {Link} from "react-router-dom";

const pages = ['Products', 'Pricing', 'Blog'];


const Header = ({isLogin, sideNavStatus}) => {

    return (
        <>

            <CssBaseline/>
            <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Container maxWidth="xl">

                    <Toolbar disableGutters>
                        {isLogin &&
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                            onClick={() => {
                                Store.dispatch({type: ReducerTypes.SET_SIDE_NAV, payload: !sideNavStatus})
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        }

                        <Typography variant="h6" color="inherit" component="div">
                            Crosslines
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {/*{pages.map((page) => (*/}
                            {/*    <Button*/}
                            {/*        key={page}*/}
                            {/*        sx={{my: 2, color: 'white', display: 'block'}}*/}
                            {/*    >*/}
                            {/*        {page}*/}
                            {/*    </Button>*/}
                            {/*))}*/}
                        </Box>
                        {!isLogin ?
                            <Button color="inherit"> <Link to={'/signin'}>Login</Link></Button>
                            :
                            <Button color="inherit" onClick={(e)=>{e.preventDefault();}}> <Link to={'/signin'}>Logout</Link></Button>
                        }

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.User.isLogin,
        sideNavStatus: state.Settings.sideNavStatus
    }
};


export default connect(mapStateToProps)(Header)
