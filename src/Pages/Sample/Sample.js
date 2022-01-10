import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import SampleForm from "./SampleForm";
import SampleList from "./SampleList";
import Button from "@material-ui/core/Button";


const Sample = ({}) => {

    const [pageState, setPageState] = useState('VIEW');

    useEffect(()=>{
        console.log(pageState)
    },[pageState])

    const onSubmit = () => {
        setPageState('VIEW');
    }

    const onCancel = () => {
        setPageState('VIEW');
    }

    const onEdit = () => {
        setPageState('UPDATE');
    }

    return (
        <>
            {pageState === "ADD" ||  pageState === "UPDATE" ?
                <SampleForm onSubmit={()=>{onSubmit()}} onCancel={()=>{onCancel()}}/>
                :
                <>
                    <Button onClick={() => {
                        setPageState('ADD')
                    }}>Add</Button>
                    <SampleList onEdit={()=>{onEdit()}}/>
                </>
            }

        </>
    )
}

const mapStateToProps = (state) => {
    return {}
};


export default connect(mapStateToProps)(Sample);
