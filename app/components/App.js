import React from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Home} from './Home/Home';
import {About} from './About/About';
import {Login} from './Login/Login';
import {NoMatch} from './404/NoMatch';

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/hellomate">Topics</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/login' component={Login} />
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
