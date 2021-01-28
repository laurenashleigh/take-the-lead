import './App.css';
import Home from './pages/Home';
import {Router, Switch, Route} from 'react-router-dom'
import AboutUs from './pages/AboutUs';

import NavBar from './components/NavBar'

function App() {
  return (
      <div className="AppMain">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={AboutUs}/>
          <Route path="/classes" component={Home}/>
        </Switch>
      </div>
  );
}

export default App;
