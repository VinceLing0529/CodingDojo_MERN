import React from 'react';
import { navigate } from '@reach/router';
export default props => {
    const { personId } = props;
    const navigatetoedit = e => {
        navigate('/edit/'+personId)
    }
    return (
        <button onClick={navigatetoedit}>
            Edit
        </button>
    )
}