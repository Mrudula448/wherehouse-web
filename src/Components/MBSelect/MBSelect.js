import React,{useEffect,useState} from 'react';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

const MBSelect =({options,name,validate,onChange,id,className,value,label,key,required})=>{
    const [selectedValue,setSelectedValue] = useState('');
    const [isError,checkError] = useState(false);
    const [errorMsg,setErrorMsg] = useState("");

    useEffect(() => {
        if (validate && required){
            if (selectedValue.toString().trim() && selectedValue.toString().trim().length>0){
                checkError(false);
                setErrorMsg("");
            }else {
                checkError(true);
                setErrorMsg("Please Select a value");
            }

        }
    },[selectedValue,validate])

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
        if (onChange){
            onChange(e);
            console.log(e.target.value);
        }
    }

    return(
        <>
            <FormControl sx={{ m: 0, minWidth: '100%' }} error={isError} >
                <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-error-label"
                    className={className||''}
                    id={id||''}
                    key={key||''}
                    value={selectedValue}
                    name={name||''}
                    required={required||false}
                    label={label||''}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>{errorMsg}</FormHelperText>
            </FormControl>
        </>
    )
}
export default MBSelect