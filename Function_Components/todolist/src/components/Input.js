import React from "react";

const Input = (props) => {
const{ list, setlist} = props;
let task = {
    name : "",
    isComplete :false
}
const onChange = (e) =>{
    task.name = e.target.value;
};
const onClick = (e) =>{
    setlist([...list,task]);
}
return(
   <div className="container w-50">
   <input onChange={onChange} type="test" name = "task"/>
   <br></br>
   <button onClick={onClick} className="btn btn-primary btn-block">Add</button>
   
   </div>
)

}

export default Input