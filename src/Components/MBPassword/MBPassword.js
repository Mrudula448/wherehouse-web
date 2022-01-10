import React,{useEffect,useState} from 'react';
import {TextField} from "@mui/material";
import {Basic} from "../../Assets/Constants";

const MBPassword = ({className,id,value,name,onChange,label,required,validate}) =>{
    const [password,setPassword]=useState(value||'');
    const [errorMsg,setErrorMsg]=useState('');
    const [isError,checkError]=useState(false);

    useEffect((e)=>{console.log(password);
        if (validate && required) {
            if (validate){
                const pwdregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
                if (pwdregex.test(password) && password.toString().trim() && password.toString().trim().length>0){
                    checkError(false);
                    setErrorMsg("");
                }else {
                    checkError(true);
                    setErrorMsg("Password Must be 6 to 16 characters");
                }
            }
        }
        else{
            checkError(false);
            setErrorMsg("");
        }

    },[password,validate])



    const change =(e) =>{
        e.preventDefault();
        setPassword(e.target.value);
        if (onChange){
            onChange(e);console.log(e.target.value)
        }
        if (validate){

        }

    }
    return(
        <>
            <TextField type={"password"}
                className={className||''}
                id={id||''}
                value={password}
                name={name||''}
                onChange={change}
                label={label}
                variant={Basic.TEXT_FIELD_DESIGN_VARIANT}
                required={required || false}
                error={isError}
                helperText={errorMsg}

            />
        </>
    )
}
export default MBPassword
