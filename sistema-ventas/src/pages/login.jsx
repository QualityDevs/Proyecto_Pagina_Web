import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <form >
        <div>
          <input
            type='email'
            placeholder='dsl@c.com'
            required
          />
          <input
            type='password'
            required
          />
        </div>
        <div className='flex justify-between'>
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
