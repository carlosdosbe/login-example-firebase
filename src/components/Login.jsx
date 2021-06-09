import React from 'react'
import {auth, db} from '../firebase'
import {withRouter} from 'react-router-dom'

const Login = (props) => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState(null)
  const [esRegistro, setEsRegistro] = React.useState(true)

  const procesarDatos = (e) => {
    e.preventDefault()
    if(!email.trim()){
      console.log('Vacio email')
      setError('Vacio email')
      return
    }

    if(!password.trim()){
      console.log('Vacio pass')
      setError('Vacio pass')
      return
    }

    if(password.length < 6){
      console.log('Corto pass')
      setError('Pass corto')
      return
    }

    setError(null)
    if(esRegistro){
      registrar()
    }else{
      login()
    }

    setError(null)
  }

  const login = React.useCallback(async () => {
    try{
      const res = await auth.signInWithEmailAndPassword(email, password)
      console.log(res.user)
      setEmail('')
      setPassword('')
      setError(null)
      props.history.push('/admin')
    }catch(error){
      setError(error.message)
    }
  }, [email, password, props.history])

  const registrar = React.useCallback(async() => {
    try{
      const res = await auth.createUserWithEmailAndPassword(email, password)
      
      await db.collection('usuarios').doc(res.user.email).set({
        email: res.user.email,
        uid: res.user.uid
      })

      setEmail('')
      setPassword('')
      setError(null)

      console.log(res.user)

      props.history.push('/admin')
    }catch(error){
      console.log(error)
      setError(error.message)
    }
  }, [email, password, props.history])

  return (
    <div className="mt-5">
      <h3 className="text-center">
        {
          esRegistro ? 'Registro' : 'Acceso'
        }
      </h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-xl-4">
          <form onSubmit={procesarDatos}>
            {
              error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )
            }
            <input 
              type="email" 
              placeholder="Email"
              className="form-control mb-2"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <input 
              type="password" 
              placeholder="Password"
              className="form-control mb-2"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <div className="d-grid my-2">
              <button className="btn btn-dark btn-lg btn-block mb-3" type="submit">
              {
                  esRegistro ? 'Registrarse' : 'Acceso'
                }
              </button>
              <button 
                className="btn btn-info btn-sm btn-block"
                type="button"
                onClick={() => setEsRegistro(!esRegistro)}
              >
                {
                  esRegistro ? 'Acceso' : 'Registro'
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Login)
