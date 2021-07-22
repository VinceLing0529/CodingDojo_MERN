import axios from "axios";
import Authorform from "../components/Authorform";
import React from "react";
import { Link } from "@reach/router";
import { useState,useEffect } from "react";
export default props => {
    const { id } = props;
    const [person, setPerson] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setPerson(res.data);
            })
    }, [])

    const updatePerson = person => {
        axios.put('http://localhost:8000/api/author/' + id, person)
            .then(res => console.log(res));
    }

    return (
        <div>
           <hr/>
           <h1>Favorite authors</h1>
           <h1>{person.name}</h1>
           <Link to = "/">Home</Link>
           <Authorform onSubmitProp={updatePerson} i_name = {person.name}/>

        </div>

        
    )
}