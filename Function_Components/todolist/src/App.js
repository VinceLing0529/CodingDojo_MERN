
import './App.css';
import Input from "./components/Input";
import Task from "./components/Task";

import React, { useState } from 'react';

function App() {
  const [list,setlist] = useState([]);

  return (
    <div className="App">
      {list.map((task,i )=> (
        <Task task = {task} settask ={setlist} index = {i} list = {list}/>
      ))}
      <Input list={list} setlist={setlist} />
      
    </div>
  );
}

export default App;
