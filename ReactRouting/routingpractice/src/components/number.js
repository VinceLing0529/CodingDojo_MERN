import React, { useState } from  'react';

const Number = (props) =>{
    
    return(
        <div>
        
        {parseInt(props.st) ?
          <h2>
            You number : {props.st}
          </h2>:
            <h2>
                You word : {props.st}
            </h2>
        }
        
        
      </div>
    )
}

export default Number