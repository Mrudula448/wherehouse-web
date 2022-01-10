import React from 'react';
import {Container, Link} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BottomNavigation from '@mui/material/BottomNavigation';

function Copyright(){
    return(
        <Typography variant={"body2"} color={"text.secondary"} align={"right"} style={{lineHeight:"4.3"}}>
            {'Copyright © '}
            <Link color="inherit" href="">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}
const Footer =() =>{
    const wrapper  = {
        position:'absolute',
        bottom:'0',
        width:'100%',
    };
    return(
    <BottomNavigation style={wrapper}>
        <Copyright />
    </BottomNavigation>
    )
}
export default Footer
