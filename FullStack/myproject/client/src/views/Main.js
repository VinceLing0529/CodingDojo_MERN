import React, { useEffect, useState } from 'react';
import Personform from '../components/Personform';
import PersonList from '../components/PersonList';
import axios from 'axios';

export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
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
           <Personform/>
           <hr/>
           <h1>All products</h1>
           {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
        </div>
    )
}