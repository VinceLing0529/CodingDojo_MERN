import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from '@reach/router'


export default props => {
    const { removeFromDom } = props;
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
       
    }

    return (
        <div>
            {props.people.map((person, idx)=>{
                return (    <div>
                    <Link to = {"/people/" + person._id}>{person.title}</Link>
                    <button onClick={(e)=>{deletePerson(person._id)}}>
                        Delete
                    </button>
                    <br>
                    </br>
                </div>
                               
                )
                
            })}
            
        </div>
    )
}
