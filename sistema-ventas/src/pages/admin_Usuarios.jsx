import React from 'react';
import '../styles/stylesc.css';

const AdminUsuarios = () => {
    return (
        <div className="container"> 
        <div className="item item-1">
        <h2 className="tablaH2">Usuarios</h2>
        </div>
            <div className="item item-2">
            <form>
            <table className="tablaAzul">
            <thead>
            <tr> 
                <th className="tablath">Id usuario</th> 
                <th className="tablath">Nombre</th> 
                <th className="tablath">Estado</th>
                <th className="tablath">Rol</th> 
            </tr>
            </thead>
            <tbody>
            <tr> 
                <td className="tablatd">1234567899</td> 
                <td className="tablatd">Abella Herrera William Efrain</td>
                <td className="tablatd">
                    <select className="tablaSelect">
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No autorizado</option>
                    </select>
                </td>
                <td className="tablatd">
                    <select className="tablaSelect">
                        <option>Vendedor</option>
                        <option>Administrador</option>
                    </select>
                </td>
            </tr>
            <tr> 
                <td className="tablatd">1234567899</td> 
                <td className="tablatd">Alegria Fernandez Diego Alonso</td>
                <td className="tablatd">
                    <select className="tablaSelect">
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No autorizado</option>
                    </select>
                </td>
                <td className="tablatd">
                    <select className="tablaSelect">
                        <option>Vendedor</option>
                        <option>Administrador</option>
                    </select>
                </td>
            </tr>
            <tr> 
                <td className="tablatd">1234567899</td> 
                <td className="tablatd">Arenas De Escobar Maria Margoth</td>
                <td className="tablatd">
                    <select className="tablaSelect">
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No autorizado</option>
                    </select>
                </td>
                <td className="tablatd">
                    <select className="tablaSelect">
                        <option>Vendedor</option>
                        <option>Administrador</option>
                    </select>
                </td>
            </tr>
            <tr> 
                <td className="tablatd">1234567899</td> 
                <td className="tablatd">Cabrera Leyton Hernando</td>
                <td className="tablatd">
                    <select className="tablaSelect">
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No autorizado</option>
                    </select>
                </td>
                <td className="tablatd">
                    <select className="tablaSelect">
                        <option>Vendedor</option>
                        <option>Administrador</option>
                    </select>
                </td>
            </tr>
            <tr> 
                <td className="tablatd">1234567899</td> 
                <td className="tablatd">Egas Realpe Mauro Alberto</td>
                <td className="tablatd">
                    <select className="tablaSelect">
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No autorizado</option>
                    </select>
                </td>
                <td className="tablatd">
                    <select className="tablaSelect">
                        <option>Vendedor</option>
                        <option>Administrador</option>
                    </select>
                </td>
            </tr>
            <tr> 
                <td className="tablatd">1234567899</td> 
                <td className="tablatd">Grijalba Gomez Pedro Felipe</td>
                <td className="tablatd">
                    <select className="tablaSelect">
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No autorizado</option>
                    </select>
                </td>
                <td className="tablatd">
                    <select className="tablaSelect">
                        <option>Vendedor</option>
                        <option>Administrador</option>
                    </select>
                </td>
            </tr>
            <tr> 
                <td className="tablatd">1234567899</td> 
                <td className="tablatd">Hidalgo Otero Ana Liliana</td>
                <td className="tablatd">
                    <select className="tablaSelect">
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No autorizado</option>
                    </select>
                </td>
                <td className="tablatd">
                    <select className="tablaSelect">
                        <option>Vendedor</option>
                        <option>Administrador</option>
                    </select>
                </td>
            </tr>
            </tbody>
            </table>
            </form>
            </div> 

        </div>
    );
}

export default AdminUsuarios;
