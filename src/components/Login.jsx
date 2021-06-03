import React from 'react'

const Login = () => {

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
  }

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
              name="" 
              id="" 
              placeholder="Email"
              className="form-control mb-2"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <input 
              type="password" 
              name="" 
              id="" 
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

export default Login
