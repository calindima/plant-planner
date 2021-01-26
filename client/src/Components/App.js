import './App.css';

// my components
import Navbar from './Navbar/index';
import Home from './Home/index';
import Notifications from './Notifications/index';
import PlantList from './PlantList/index';
import SinglePlant from './SinglePlant/index';

// router stuff
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/plants">
          <PlantList />
        </Route>
        <Route path="/notifications">
          <Notifications />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
