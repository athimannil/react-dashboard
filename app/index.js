import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import {Home} from './components/Home';
import {About} from './components/About';
import {Login} from './components/Login';
import {NoMatch} from './components/NoMatch';

// import {Root} from './'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/home">Topics</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

render(<App />, window.document.getElementById('myapp'));
