import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>

            <h4>
            Iniciar Sesión
            </h4>

            <form >
        <div>
          <input
            class= 'form'
            type='email'
            placeholder='tunombre@tucorreo.com'
            required
          />
          </div>
          <div>
          <input
          
            type='password'
            placeholder= ' ********'
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
            <button type='submit'>Iniciar Sesion</button>
          </Link>
        </div>
        <div>O</div>
        <div>
          <button>Continua con google</button>
        </div>
      </form>
        </div>
    )
}

export default Login;
