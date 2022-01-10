import React from "react";
import {connect} from 'react-redux';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

function ProgressBar({show}){
    if(show){
        return(
            <Stack sx={{width: '100%', position:'fixed',zIndex:'10'}} spacing={2}>
                <LinearProgress color="success"/>
            </Stack>
        )
    }
    else{
        return (<></>);
    }
}
const mapStateToProps = (state) => {
    return {
        show:state.Settings.showLoader
    }
};
export default connect(mapStateToProps)(ProgressBar);
