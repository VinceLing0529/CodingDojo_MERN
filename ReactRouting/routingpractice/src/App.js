
import './App.css';
import Home from './components/home';
import { Router } from '@reach/router';
import Number  from './components/number';
import Word from './components/word';
function App() {
  return (
    <div className="App">
      <Router>
            <Home path="/Home"/>
            <Number path="/:st"/>
            <Word path="/:st/:text/:bg"/>
        </Router>
    </div>
  );
}

export default App;
