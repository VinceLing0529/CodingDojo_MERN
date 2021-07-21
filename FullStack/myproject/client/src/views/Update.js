import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Redirect } from '@reach/router';
import Personform from '../components/Personform';
import DeleteButton from '../components/DeleteButton';
import { navigate } from '@reach/router';
export default props => {
    const { id } = props;
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, [])
    const updatePerson = person => {
        axios.put('http://localhost:8000/api/people/' + id, person)
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Person</h1>
            {loaded && (
                <>
                    <Personform
                        onSubmitProp={updatePerson}
                        i_title={person.title}
                        i_price={person.price}
                        i_description = {person.description}
                    />
                    <DeleteButton personId={person._id} successCallback={() => navigate("/people")} />
                </>
            )}
        </div>
        
    )
}

