import React from 'react'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="llogin">

      <h4>
        Iniciar Sesión
      </h4>

      <form >
        <div>
          <input
            class='form'
            type='email'
            placeholder='tunombre@tucorreo.com'
            required
          />
        </div>
        <div>
          <input

            type='password'
            placeholder=' ********'
            required
          />
        </div>
        <div >
          <div>
            <label htmlFor='recuerdame'>
              <input type='checkbox' name='recuerdame' />
              Recuerdame
            </label>
          </div>
          <div>
            <Link to='/'>¿Olvidaste tu contraseña?</Link>
          </div>
        </div>
        <div>
          <Link to='/admin'>
            <button class= 'border border-danger rounded ' type='submit'>Iniciar Sesion</button>
          </Link>
        </div>
        <div>O</div>
        <div>
          <Link to='/admin'>
            <button class= 'border border-danger rounded bg' type='submit ' ><FcGoogle/> Continua con google</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login;
