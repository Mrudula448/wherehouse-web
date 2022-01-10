import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import {Basic} from "../../Assets/Constants";

const MBTextField = ({id, className, value, name, key, label, required, validate, onChange}) => {
    const [errorMsg, setErrorMsg] = useState("");
    // const [valid,setValid] =
    console.log(validate);
    const [isError, checkError] = useState(false);
    const [cValue, setValue] = useState(value || '');
    useEffect(() => {
        console.log("gello")
        if (validate && required) {
            if (cValue.toString().trim() && cValue.toString().trim().length > 0) {
                checkError(false);
                setErrorMsg("");
            } else {
                checkError(true);
                setErrorMsg("enter a value");
            }
        }
        else{
            checkError(false);
            setErrorMsg("");
        }
    }, [cValue,validate]);

    const change = (e) => {
        setValue(e.target.value);
        if (onChange) {
            onChange(e);
            console.log(e.target.value)
        }

        if (validate) {
            // e.target.value
        }
    }

    return (
        <>
            <TextField
                className={className || ''}
                value={cValue}
                name={name || ''}
                key={key || ''}
                id={id || ''}
                label={label}
                variant={Basic.TEXT_FIELD_DESIGN_VARIANT}
                required={required || false}
                error={isError}
                helperText={errorMsg}
                onChange={change}
            />

        </>
    )
}
export default MBTextField;
