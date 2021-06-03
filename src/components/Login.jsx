import React from 'react'

const Login = () => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const procesarDatos = (e) => {
    e.preventDefault()
    if(!email.trim()){
      console.log('Vacio email')
      return
    }

    if(!password.trim()){
      console.log('Vacio pass')
      return
    }

    if(password.length < 6){
      console.log('Corto pass')
      return
    }

  }

  return (
    <div className="mt-5">
      <h3 className="text-center">Registro</h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-xl-4">
          <form onSubmit={procesarDatos}>
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
              <button className="btn btn-dark btn-lg btn-block mb-3">
                Registrarse
              </button>
              <button className="btn btn-info btn-sm btn-block">
                Acceder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
