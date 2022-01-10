import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
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
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import image1 from '../../balloon.jpg';
import {Link} from "react-router-dom";


// import History from '../../Utils/History';
const SampleForm = ({onSubmit,onCancel}) => {
    const [valid, setValid] = useState(false);
    const paperstyles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "145px",
        width: "100% !important"

    }
    const styles = {
        paperContainer: {
            backgroundImage: `url(${image1})`,
            width: "100%",
            height: "50vh",
            backgroundSize: "cover",
            position: "relative !important",
            padding: "54px 26px"
        }
    };


    return (
        <>
            <Container maxWidth="lg">
                <div style={{margin: '89px'}}>
                    <div class="col-12 col-md-10 mx-auto my-auto">
                        <Card>
                            <CardContent>
                                <Grid container spacing={0}>
                                    <Grid item xs={12} sm={4}>
                                        <Paper component={"div"} style={styles.paperContainer}>
                                            Some text to fill the Paper Component
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <MBForm onSubmit={(e) => {
                                            setValid(true);
                                            onSubmit();
                                        }}>
                                            <Grid container spacing={2} className='signin-form'>
                                                <Grid item xs={12}>
                                                    <Typography variant="h6" component="h6" mb={2}>
                                                        SignIn
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12}>
                                                    <MBEmailField className={"mbtxt-width"}
                                                                  autoComplete={"off"}
                                                                  name="email"
                                                                  error
                                                                  fullWidth
                                                                  id="email"
                                                                  label="Email id"
                                                                  value={""}
                                                                  required={true}
                                                                  autoFocus
                                                                  validate={valid}
                                                                  helperText={""}
                                                                  onChange={() => {
                                                                  }}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <MBPassword className={"mbtxt-width"}
                                                                name="password"
                                                                error
                                                                fullWidth
                                                                id="password"
                                                                label="Password"
                                                                value={""}
                                                                required={true}
                                                                autoFocus
                                                                validate={valid}
                                                                onChange={() => {
                                                                }}
                                                    />

                                                </Grid>
                                                <Grid container style={{margin:'10px'}} justifyContent="flex-end">

                                                    <MBFormButton onClick={() => {
                                                        console.log('submit clicked');
                                                        setValid(true);
                                                    }} type={"submit"}>SIgn In</MBFormButton>

                                                    <MBFormButton onClick={() => {
                                                        onCancel();
                                                        setValid(false);
                                                    }} type={"cancel"}>Cancel</MBFormButton>

                                                </Grid>
                                                <div>Don't have account? <Link to={'/signup'}> Signup</Link></div>


                                            </Grid>
                                        </MBForm>
                                    </Grid>
                                </Grid>
                            </CardContent>

                        </Card>
                    </div>
                </div>



            </Container>
        </>


    )
}

export default SampleForm;
