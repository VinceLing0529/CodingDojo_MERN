import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import axios from 'axios';

const Poki = (props) => {
    const [people, setPeople] = useState([]);
    const [website, setWebsite] = useState("");
    const onClick = () => {
        setWebsite("https://pokeapi.co/api/v2/pokemon?offset=806&limit=806");

    };
    
    useEffect(() => {
        axios.get(website)
            .then(response => setPeople(response.data.results))
    }, [website]);

    return (
        
        <div>
            <button onClick = {onClick} >fetch pokemon</button>
            {people!=null && people.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
        </div>
    );
}
export default Poki;