import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'

function App() {
  return (
      
    <Router>
    
      <div className="container">
        <div className="row">
          <div className="col mt-2">
            <h1>Login example</h1>
            <hr />
          </div>
        </div>
      </div>

      <div div className="container">  
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/admin">
            admin
          </Route>
          <Route path="/">
            index
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
