
import React, { useState } from  'react';

const MovieForm = (props) => {
    const [FirstName, setFirstName] = useState("");
    const [FirstNameError, setFirstNameError] = useState("");

    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("FirstName is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("FirstName must be 2 characters or longer!");
        }
        else{
            setFirstNameError("")
        }

    }

    const [LastName, setLastName] = useState("");
    const [LastNameError, setLastNameError] = useState("");

    
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("LastName is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("LastName must be 2 characters or longer!");
        }
        else{
            setLastNameError("")
        }

    }
    const [Email, setEmail] = useState("");
    const [EmailError, setEmailError] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        }
        else{
            setEmailError("")
        }

    }
    const [Password, setPassword] = useState("");
    const [PasswordError, setPasswordError] = useState("");
    const [CP, setCP] = useState("");

    const handlePassword = (e) => {
        setPassword(e.target.value);
        
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        }
        else{
            setPasswordError("")
        }
        if( e.target.value != CP){
            setPasswordError("must match")
        }
        else if(CP!=e.target.value ){
            setPasswordError("must match")
        }
       
    }

    {/* rest of component removed for brevity */}
    
    return (
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>FirstName: </label>
                <input type="text" onChange={ handleFirstName } />
                {
                    FirstNameError ?
                    <p style={{color:'red'}}>{ FirstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>LastName: </label>
                <input type="text" onChange={ handleLastName } />
                {
                    LastNameError ?
                    <p style={{color:'red'}}>{ LastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ handleEmail } />
                {
                    EmailError ?
                    <p style={{color:'red'}}>{ EmailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                    PasswordError ?
                    <p style={{color:'red'}}>{ PasswordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setCP(e.target.value) } />
                
            </div>
            <input type="submit" value="Create Movie" />
        </form>
    );
}
export default MovieForm