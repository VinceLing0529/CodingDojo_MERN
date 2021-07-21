import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

export default  props => {
    //keep track of what is being typed via useState hook
    const{ onSubmitProp,i_title,i_price,i_description}= props;
    const [title, setTitle] = useState(i_title); 
    const [price, setPrice] = useState(i_price);
    const [description, setDescription] = useState(i_description);

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        onSubmitProp({title,price, description});
        navigate("/people")

    }

    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}