import React from 'react';
import '../styles/stylesc.css';

const AdminUsuarios = () => {
    return (
        <div className="container"> 
        <div className="item item-1">
        <h2 >Usuarios</h2>
        </div>
            <div className="item item-2">
            <form>
            <table >
            <thead>
            <tr> 
                <th>Id usuario</th> 
                <th>Nombre</th> 
                <th>Estado</th>
                <th>Rol</th> 
            </tr>
            </thead>
            <tbody>
            <tr> 
                <td>1234567899</td> 
                <td>Abella Herrera William Efrain</td>
                <td>
                    <select>
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No autorizado</option>
                    </select>
                </td>
                <td>
                    <select>
                        <option>Vendedor</option>
                        <option>Administrador</option>
                    </select>
                </td>
            </tr>
            <tr> 
                <td>4963579855</td>
                <td>Alegria Fernandez Diego Alonso</td>
                <td>
                <select>
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No autorizado</option>
                    </select>
                </td>
                <td>
                    <select>
                        <option>Vendedor</option>
                        <option>Administrador</option>
                    </select>
                </td>
            </tr>
            <tr> 
                <td>5785433474</td>
                <td>Arenas De Escobar Maria Margoth</td>
                <td>
                <select>
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No autorizado</option>
                    </select>
                </td>
                <td>
                    <select>
                        <option>Vendedor</option>
                        <option>Administrador</option>
                    </select>
                </td>
            </tr>
            <tr> 
                <td>2497291443</td>
                <td>Cabrera Leyton Hernando</td>
                <td>
                <select>
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No autorizado</option>
                    </select>
                </td>
                <td>
                    <select>
                        <option>Vendedor</option>
                        <option>Administrador</option>
                    </select>
                </td>
            </tr>
            <tr> 
                <td>1234567899</td>
                <td>Egas Realpe Mauro Alberto</td>
                <td>
                <select>
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No autorizado</option>
                    </select>
                </td>
                <td>
                    <select>
                        <option>Vendedor</option>
                        <option>Administrador</option>
                    </select>
                </td>
            </tr>
            <tr> 
                <td>1474509792</td>
                <td>Grijalba Gomez Pedro Felipe</td>
                <td>
                <select>
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No autorizado</option>
                    </select>
                </td>
                <td>
                    <select>
                        <option>Vendedor</option>
                        <option>Administrador</option>
                    </select>
                </td>
            </tr>
            <tr> 
                <td>1234567899</td>
                <td>Hidalgo Otero Ana Liliana</td>
                <td>
                <select>
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No autorizado</option>
                    </select>
                </td>
                <td>
                    <select>
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
