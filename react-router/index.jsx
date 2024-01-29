// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Packages from './components/Packages';
import Services from './components/Services';
import PackageDetails from './components/PackageDetails'; // Add this line

const packages = [...] // Your packages data

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/packages" render={() => <Packages packages={packages} />} />
          <Route path="/services" component={Services} />
          <Route path="/packages/:packageId" component={PackageDetails} /> {/* Add this line */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
