import './App.css';

// my components
import Navbar from './Navbar/index';
import Home from './Home/index';
import Notifications from './Notifications/index';
import PlantList from './PlantList/index';
import SinglePlant from './SinglePlant/index';

// router stuff
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/plants" component={PlantList} />
      <Route path="/plant/:id" component={SinglePlant} />
      <Route path="/notifications" component={Notifications} />
    </Router>
  );
}

export default App;
