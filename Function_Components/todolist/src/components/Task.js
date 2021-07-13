import React from "react";

const Task =(props) =>{
    const {task, index,list,settask}  = props;
    const onClick = () =>{settask(()=>list.filter(task => list.indexOf(task)!=index))};
    const onChange =() => {list[index].isComplete = !list[index].isComplete};
    return(
        <div>
            
            <h4>{task.name} <input onChange ={onChange} type="checkbox"/> <button onClick={onClick}>Delete</button></h4>
           
        </div>
    )
}
export default Task