import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from '@reach/router'
import DeleteButton from './DeleteButton';

export default props => {
    const { removeFromDom } = props;


    return (
        <div>
            {props.people.map((person, idx)=>{
                return (    <div>
                    <Link to = {"/people/" + person._id}>{person.title}</Link>
                    <DeleteButton personId={person._id} successCallback={()=>removeFromDom(person._id)}/>

                    <br>
                    </br>
                </div>
                               
                )
                
            })}
            
        </div>
    )
}
