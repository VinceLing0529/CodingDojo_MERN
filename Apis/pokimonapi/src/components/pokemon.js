import { useEffect } from "react";
import { useState } from "react";
import React from "react";
const Poki = (props) => {
    const [people, setPeople] = useState([]);
    const [website, setWebsite] = useState("");
    const onClick = () => {
        setWebsite("https://pokeapi.co/api/v2/pokemon?offset=806&limit=806");

    };
    
    useEffect(() => {
        fetch(website)
            .then(response => response.json())
            .then(response => setPeople(response.results))
    }, [website]);
    return (
        
        <div>
            <button onClick = {onClick} >fetch</button>
            {people.length > 0 && people.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
        </div>
    );
}
export default Poki;