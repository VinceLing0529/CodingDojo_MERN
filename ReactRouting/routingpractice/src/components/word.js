import React, { useState } from  'react';

const Word = (props) =>{
    const styles = {
        color: props.text,
        background: props.bg
    };
    
    return(
        <div style={styles}>
           <h1>The word is {props.st}</h1>
        </div>
    )
}

export default Word