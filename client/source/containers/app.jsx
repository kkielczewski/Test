import React from 'react';
import {
  Route,
  NavLink,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import MainFeed from './main-feed';
import DoctorFeed from './doctor-feed';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div style={{ width: '100%', height: '50px', background: '#d82923', display: '-webkit-flex', display: '-webkit-box',display: '-moz-flex', display: '-moz-box', display: '-ms-flexbox', display: 'flex', boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.3)' }} >
            <NavLink className="navItem" to="/" >Main</NavLink>
          </div>
          <Switch>
            <Route exact path="/" component={MainFeed} />
            <Route exact path="/doctor/:id" component={DoctorFeed} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
