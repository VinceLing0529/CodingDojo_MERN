import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';


export default props => {
    return (
        <div>
            {props.people.map((person, idx)=>{
                return (    <div>
                    <Link to = {"/people/" + person._id}>{person.title}</Link>
                    <br>
                    </br>
                </div>
                               
                )
                
            })}
        </div>
    )
}
