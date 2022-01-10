import React,{useState} from 'react';

const MBForm = ({children,onSubmit}) => {


    const handleSubmit = (e) => {
        e.preventDefault();
      if(onSubmit){
          onSubmit(e)
      }
    }
    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    )
}
export default MBForm;
