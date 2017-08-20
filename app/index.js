import React from 'react';
import {render} from 'react-dom';
// import { Router, Route, browserHistory} from 'react-router';
// import { Router, Route, Switch } from 'react-router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {Home} from './components/Home';
import {About} from './components/About';

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
          </ul>
          <Route exact path="/" component={Home}/>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </Router>
      // <div>
      //   <h3>Github trend feeds</h3>
      //   <p>helo mate</p>
      //   <h1>lorem</h1>
      // </div>
      // <Router history={browserHistory}>
      //   <Route path={"/"} component={Root}>
      //     <Route path={"items"} component={Items}></Route>
      //     <Route path={"detail"} component={Detail}></Route>
      //   </Route>
      //   {/* <Route path={"header"} componen={Header}/> */}
      //   {/* <Route path={"search"} component={Search}/> */}
      //   {/* <Route path={"items"} component={Items} /> */}
      //   {/* <Route path={"detail"} component={Detail} /> */}
      // </Router>
    );
  }
}

render(<App />, window.document.getElementById('myapp'));
