import React, { useState, useEffect } from 'react';
import Store from '../../Store';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import image1 from '../../balloon.jpg';
import MBTextField from "../../Components/MBTextField/MBTextField";
import MBForm from "../../Components/MBForm/MBForm";
import MBFormButton from "../../Components/MBFormButton/MBFormButton";
import { Container } from "@mui/material";
import MBEmailField from "../../Components/MBEmailField/MBEmailField";
import MBPassword from "../../Components/MBPassword/MBPassword";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MBSelect from "../../Components/MBSelect/MBSelect";
import Card from "@material-ui/core/Card";
import { Paper } from '@mui/material';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import CustomTabs from './CustomTabs';

const Signup = () => {
    const [valid, setValid] = useState(false);
    const styles = {
        paperContainer: {
            backgroundImage: `url(${image1})`,
            width: "100%",
            height: "64vh",
            backgroundSize: "cover",
            position: "relative !important",
            padding: "54px 26px"
        }
    };


    return (
        <div>
            <Container maxWidth="lg">
            <div style={{margin: '89px'}}>
                <Card>
                    <CardContent>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={4}>
                                <Paper component={"div"} style={styles.paperContainer}>
                                    Some text to fill the Paper Component
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                
                                <Box component={"div"} className='signup-form'>
                                <Grid item xs={12}>
                                    <Typography variant="h6" component="h6" mb={2}>
                                        SignUp
                                    </Typography>
                                </Grid>
                                    <CustomTabs />
                                </Box>

                            </Grid>
                        </Grid>
                    </CardContent>
                    

                </Card>
                </div>




            </Container>
            

        </div>
    )
}

export default Signup;
