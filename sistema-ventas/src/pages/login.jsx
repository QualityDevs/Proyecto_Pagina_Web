import React from 'react'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import "../styles/styles.css";

const Login = () => {
  return (
    <div className="llogin ">

      <h4 className="titulo">
        Ingresa
      </h4>

      <form >
        <div>
          <input
            class='form'
            type='email'
            placeholder='nombre@dominio.com'
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
          <div className='olvidar'>
            <Link to='/'>¿Olvidaste tu contraseña?</Link>
          </div>
        </div>
        <div>
          <Link to='/home'>
            <button class= 'border border-danger rounded ' type='submit'>Iniciar Sesion</button>
          </Link>
        </div>
        <div>O</div>
        <div>
          <Link to='/home'>
            <button class= 'border border-danger rounded bg' type='submit ' ><FcGoogle/> Continuar con Google</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login;
