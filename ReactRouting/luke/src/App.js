
import './App.css';
import Form from './components/form';
import { Router } from '@reach/router';
import Result from './components/Result';
function App() {
  return (
    <div className="App">
      <Router>
            <Form path="/"/>
            <Result path="/:type/:id"/>
           
        </Router>
      

    </div>
  );
}

export default App;
