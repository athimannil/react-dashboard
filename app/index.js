import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import {Home} from './components/Home/Home';
import {About} from './components/About/About';
import {Login} from './components/Login/Login';
import {NoMatch} from './components/404/NoMatch';

// import {Root} from './'
class App extends React.Component {
  render() {
    const kooy = () => {
      alert('hello mate');
      console.log('Enter...........');
    };
    return (
      <Router onEnter={kooy}>
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

render(<App />, window.document.getElementById('myapp'));
