import './App.css';
import Home from './pages/Home';
import {Switch, Route} from 'react-router-dom'
import AboutUs from './pages/AboutUs';

import NavBar from './components/NavBar'
import ClassPage from './components/ClassPage';
import PriceAndBookingPage from './components/PriceAndBooking';

function App() {
  return (
      <div className="AppMain">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={AboutUs}/>
          <Route path="/classes" component={ClassPage}/>
          <Route path="/booking" component={PriceAndBookingPage} />
        </Switch>
      </div>
  );
}

export default App;
