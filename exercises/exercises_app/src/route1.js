import { React, Component } from "react";
import Home from './hooksPages/Home';
import About from './hooksPages/About';
import Users from './hooksPages/Users';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class Route1 extends Component {

 


  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={
                  {
                    pathname: "/about",
                    state:{
                      from:"root"
                    }
                  }
                }>About</Link>
              </li>
              <li>
                <Link to="/users/shani/staretz">Users</Link>
              </li>
             
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/users/:firstName/:lastName" component={Users} />
            <Route exact path="/" component={Home} />
           
          </Switch>
        </div>
      </Router>
    );
  }
}

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
