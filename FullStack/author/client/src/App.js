import Main from './views/Main';
import New from './views/New';
import { Router } from '@reach/router';
import React from 'react';
import Edit from './views/Edit';
function App() {
  return (
    <div className="App">
        <Router>
        <Main path="/"/>
        <New path="/new"/>
        <Edit path = '/edit/:id'/>
      </Router>
    </div>
  );
}

export default App;
