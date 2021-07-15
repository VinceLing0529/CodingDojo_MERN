import React, { useState } from  'react';
import { Link } from '@reach/router';
import axios from 'axios';
import { useEffect } from "react";
import { navigate } from '@reach/router'
import Select from "react-select";

const Result = (props) =>{
    const [Type, setType] = useState("");
    const [Id, setId] = useState("");
    
    const options = [
        { value: "people", label: "people" },
        { value: "planets", label: "planets" },
        { value: "starships", label: "starships" },
        { value: "films", label: "films" }
      ];

    const OnSubmit = () =>{
        const newUser = {Type,Id};
        navigate('/'+Type.value+'/'+Id)
    };
    const onChange = selectedOption => {
        setType(selectedOption);
        console.log(`Option selected:`, selectedOption);
      };

    const [people, setPeople] = useState([]);
    const [homeworld,setHomeworld]=useState([]);
    const website = "https://swapi.dev/api/"+props.type+"/"+props.id
    useEffect(() => {
        axios.get("https://swapi.dev/api/"+props.type+"/"+props.id)
            .then(response => setPeople(response.data))
    }, []);

    if(!people.name){
        var user = {
            Error : "These aren't the droids you're looking for"
        }
    }    
    
    else if(props.type == "people"){
   
    var user = {
        name:people.name,
        mass :people.mass,
        height:people.height,
        hair_color:people.hair_color,
        skin_color:people.skin_color,
        
    }
    }
    else if(props.type == "planets"){
        var user = {
            name:people.name,
            rotation_period :people.rotation_period,
            orbital_period:people.orbital_period,
            diameter:people.diameter,
            gravity:people.gravity
        }
    }
    else if(props.type == "starships"){
        var user = {
            name:people.name,
            model :people.model,
            manufacturer:people.manufacturer,
            cost_in_credits:people.cost_in_credits,
            length:people.length
        }
    }
    else if(props.type == "films"){
        var user = {
            name:people.title,
            episode_id :people.episode_id,
            director:people.director,
            release_date:people.release_date,
            producer:people.producer
        }
    }

    return(
        <div>
            <div>
            <form onSubmit ={OnSubmit}>

            
                <label>Search for: </label> 
                <Select options={options} onChange={onChange} />
                            
                <label>Id: </label> 
                <input type="text" onChange={ (e) => setId(e.target.value) }/>
            
            <button>Search</button>
            </form>
        </div>


           {people.name && Object.entries(user).map(([key, value]) => (
            <div id={key}>
               {key} : {value}
            </div>
            ))}
           
            {!people.name &&

            <p>"These aren't the droids you're looking for" <img src="https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png"></img>            </p>
            
            }

        </div>
    )
}
export default Result