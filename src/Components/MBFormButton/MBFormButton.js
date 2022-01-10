import React,{useEffect,useState} from 'react';
import Button from '@mui/material/Button';


const MBFormButton = (props) => {
    console.log(props);
    return(
        <>
            <Button variant="contained" type="submit"  onClick={props.onClick}>{props.children}</Button>
        </>
    )
}

export default MBFormButton

