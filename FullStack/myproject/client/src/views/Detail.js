import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson(res.data))
    }, [])
    return (
        <div>
            <p>title: {person.title}</p>
            <p>price: {person.price}</p>
            <p>description: {person.description}</p>
        </div>
    )
}