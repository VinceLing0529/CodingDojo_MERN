import axios from "axios";
import Authorform from "../components/Authorform";
import React from "react";
import { Link } from "@reach/router";
import { useState } from "react";
export default () => {
    const [people, setPeople] = useState([]);
    const [errors, setErrors] = useState([]); 

    const createPerson = person => {
        axios.post('http://localhost:8000/api/author', person)
            .then(res=>{
                setPeople([...people, res.data]);
            })
            .then(res=>console.log(res)) 
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })    

    }

    return (
        <div>
           <hr/>
           <h1>Favorite authors</h1>
           <Link to = "/">Home</Link>
           <Authorform onSubmitProp={createPerson} i_name =""/>

        </div>

        
    )
}