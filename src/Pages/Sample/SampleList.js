import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import MBTable from "../../Components/MBTable/MBTable";

let data = [
    {name: 'name', age: 'age', email: 'email', address: 'address',password:'*****'},
    {name: 'name', age: 'age', email: 'email', address: 'address',password:'*****'},
    {name: 'name', age: 'age', email: 'email', address: 'address',password:'*****'},
    {name: 'name', age: 'age', email: 'email', address: 'address',password:'*****'},
    {name: 'name', age: 'age', email: 'email', address: 'address',password:'*****'}
]

let head =
    {name: 'Name', age: 'Age', email: 'Email', address: 'Address'}
const SampleList = ({onEdit}) => {

    return (
        <>
            <MBTable editRow={true} deleteRow={true} data={data} head={head} onEdit={onEdit}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {}
};


export default connect(mapStateToProps)(SampleList);
