import './App.css';
import Home from './pages/Home';
import {Router, Switch, Route} from 'react-router-dom'
import AboutUs from './pages/AboutUs';

import NavBar from './components/NavBar'
import ClassPage from './components/ClassPage';

function App() {
  return (
      <div className="AppMain">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={AboutUs}/>
          <Route path="/classes" component={ClassPage}/>
        </Switch>
      </div>
  );
}

export default App;
