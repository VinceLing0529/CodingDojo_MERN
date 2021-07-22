import axios from "axios";
import { useState } from "react";
import AuthorList from "../components/AuthorList";
import { useEffect } from "react";
import React from "react";
import { Link } from "@reach/router";
export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/author')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
            });
    },[])

    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId));
    }

    return (
        <div>
            <h1>Favorite authors</h1>
           <Link to = "/new">Add an author</Link>
           <hr/>
           
           {loaded && <AuthorList people={people} removeFromDom={removeFromDom}/>}

        </div>

        
    )
}