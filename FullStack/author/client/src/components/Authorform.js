import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import {
    InputLabel,
    OutlinedInput,
    Paper,
    FormControl,
    Button
} from '@material-ui/core';
export default props => {
    //keep track of what is being typed via useState hook
    const{ onSubmitProp, i_name }= props;

    const [name, setName] = useState(i_name); 
    

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        onSubmitProp({name});
        navigate("/")
    }
    const onClick = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        navigate("/")
    }

    //onChange to update firstName and lastName
    return (
        
        <Paper>
            <h1>Name:{name}</h1>
        <form onSubmit={onSubmitHandler}>

                <FormControl variant="outlined">
                    <InputLabel>name</InputLabel>
                    <OutlinedInput type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </FormControl>
                <Button type="cancel" variant="contained" color="primary" onClick ={onClick}>
                    cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
        </form>

        </Paper>

    )
}