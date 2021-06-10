import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Admin from './components/Admin'
import Login from './components/Login'
import Navbar from './components/Navbar'

import {auth} from './firebase'

function App() {
  
  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user)
      if(user){
        setFirebaseUser(user)
      }else{
        setFirebaseUser(null)
      }
    })
  }, [])
  
  return firebaseUser !== false ? (      
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
            <Admin/>
          </Route>
          <Route path="/">
            inicio
          </Route>
        </Switch>
      </div>
    </Router>

  ) : (
    <p>Cargando...</p>
  )
}

export default App;
