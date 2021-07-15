import React, { useState } from  'react';
import { Link } from '@reach/router';
import { navigate } from '@reach/router'
import Select from "react-select";

const Form = (props) =>{
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

    return(
        <div>
            <form onSubmit ={OnSubmit}>

            
                <label>Search for: </label> 
                <Select options={options} onChange={onChange}/>
                            
                <label>Id: </label> 
                <input type="text" onChange={ (e) => setId(e.target.value) } />
            
            <button>Search</button>
            </form>
        </div>
    )
}
export default Form