import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TeamList from './components/TeamList';
import TeamDetails from './components/TeamDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={TeamList}/>
        <Route path="/team/:teamID" component={TeamDetails}/>
      </Router>
    </div>
  );
}

export default App;
