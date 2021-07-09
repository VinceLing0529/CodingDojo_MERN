
import './App.css';
import React from 'react';
import NewClassComponent from './components/NewClassComponent';

function App() {
  return (
    <div className="App">
      <NewClassComponent firstname = {"Jane"} lastname = {"Doe"} age={"45"} haircolor={"black"}/>
      <NewClassComponent firstname = {"John"} lastname = {"Smith"} age={"88"} haircolor={"Brown"}/>
      <NewClassComponent firstname = {"Millard"} lastname = {"Fillmore"} age={"50"} haircolor={"Brown"}/>
      <NewClassComponent firstname = {"Maria"} lastname = {"Smith"} age={"62"} haircolor={"Brown"}/>
    </div>
  );
}

export default App;
