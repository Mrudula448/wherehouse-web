import React, { useState } from "react";
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
import Grid from '@mui/material/Grid';


const CompanySignup = (props) => {
    const [valid, setValid] = useState(false);
    return (
        <MBForm onSubmit={(e) => {
            setValid(true);
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{ marginTop: '30px' }}>
                    <MBTextField className={"mbtxt-width"}
                        autoComplete={"off"}
                        name="name"
                        error
                        fullWidth
                        id="name"
                        label="Name"
                        value={""}
                        autoFocus
                        required={true}
                        validate={valid}
                        helperText={""}
                        onChange={() => {
                        }}
                    />
                </Grid>

                <Grid item xs={12} >
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
                <Grid item xs={12}>
                    <MBTextField className={"mbtxt-width"}
                        autoComplete={"off"}
                        name="mobilenumber"
                        error
                        fullWidth
                        id="mobilenumber"
                        label="Mobile Number"
                        value={""}
                        autoFocus
                        required={true}
                        validate={valid}
                        helperText={""}
                        onChange={() => {
                        }}
                    />
                </Grid>

                <Grid container style={{ margin: '10px' }} justifyContent="flex-end">

                    <MBFormButton onClick={() => {
                        console.log('submit clicked');
                        setValid(true);
                    }} type={"submit"}>SIgn Up</MBFormButton>

                </Grid>
                <div>have Account ?<Link to={'/signin'}>SignIn</Link></div>




            </Grid>
        </MBForm>
    )
}
export default CompanySignup