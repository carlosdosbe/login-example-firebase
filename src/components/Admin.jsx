import React from 'react'
import {auth} from '../firebase'
import {withRouter} from 'react-router-dom'

const Admin = (props) => {

  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    if(auth.currentUser){
      console.log('existe')
      setUser(auth.currentUser)
    }else{
      console.log('no existe')
      props.history.push('/login')
    }
  }, [props.history])

  return (
    <div>
      <h2>Protegida</h2>
      {
        user && (
          <h3>{user.email}</h3>
        )
      }
    </div>
  )
}

export default withRouter(Admin)
