import React from 'react';
import '../styles/stylesc2.css';
import TablaUsuarios from '../Components/tablaUsuarios';

const EditarUsuarios = () => {

    return (
<div className="container"> 
        <div className="item item-1">
        <h3 className="tablaH3">Edición de usuario</h3>
        </div>
            <div className="item item-2">
            <form>
            <table className="tabla2">
            <thead>
            <tr> 
                <th className="tablath">ID USUARIO</th> 
                <th className="tablath">NOMBRE</th> 
                <th className="tablath">ESTADO</th>
                <th className="tablath">ROL</th> 
            </tr>
            </thead>
            <tbody>
            <tr> 
                <td className="tablatd2">1234567899</td> 
                <td className="tablatd2">Abella Herrera William Efrain</td>
                <td className="tablatd2 centro2">
                <select className="tablaSelect">
                    <option disabled>Estado</option>
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No autorizado</option>
                    </select>
                </td> 
                <td className="tablatd2">
                <select className="tablaSelect">
                        <option disabled>Rol</option>
                        <option>Vendedor</option>
                        <option>Administrador</option>
                    </select>
                </td>
            </tr>
            </tbody>
            </table>
            </form>
            </div>
            <div className="item item-3">
            <button type="button" className="btn btn-primary">
                <a className="aModificada" href="#usuarioActualizado">Actualizar</a>
            </button>
            <div id="usuarioActualizado" class="overlay">
            <div id="popupBody">
                <h2>Actualización de usuario</h2>
                <div class="popupContent">
                    <p>El usuario se ha actualizado correctamente</p>
                </div>
                <a id="cerrar2" href="#">
                <button type="button" className="btn btn-danger">Cerrar</button>
                </a>
            </div>
        </div>
            </div>
        </div>
        
    )
}

export default EditarUsuarios
