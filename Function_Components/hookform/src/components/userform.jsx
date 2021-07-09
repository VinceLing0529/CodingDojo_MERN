import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [ConfirmPassword, setCPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { FirstName,LastName, email, password,ConfirmPassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>FirstName: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>LastName: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>ConfirmPassword: </label>
                <input type="text" onChange={ (e) => setCPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>

        <p> FirstName: { FirstName}</p>
        <p> LastName: { LastName}</p>
        <p> email：{ email}</p>
        <p> password：{ password}</p>
        <p> ConfirmPassword：{ ConfirmPassword}</p>
        </div>
        
    );
};

export default UserForm;