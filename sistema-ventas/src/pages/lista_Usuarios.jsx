import React from 'react'
import '../styles/stylesc.css';

const ListaUsuarios = () => {
    return (
        <div className="container"> 
        <div className="item item-1">
        <h3 className="tablaH3">Usuarios</h3>
        </div>
            <div className="item item-2">
            <form>
            <table className="tablaAzul">
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
                <td className="tablatd">1234567899</td> 
                <td className="tablatd">Abella Herrera William Efrain</td>
                <td className="tablatd">Pendiente</td> 
                <td className="tablatd">Vendedor</td>
            </tr>
            <tr> 
                <td className="tablatd">1234567899</td> 
                <td className="tablatd">Alegria Fernandez Diego Alonso</td>
                <td className="tablatd">Pendiente</td> 
                <td className="tablatd">Vendedor</td>
            </tr>
            <tr> 
                <td className="tablatd">1234567899</td> 
                <td className="tablatd">Arenas De Escobar Maria Margoth</td>
                <td className="tablatd">Pendiente</td> 
                <td className="tablatd">Vendedor</td>
            </tr>
            <tr> 
                <td className="tablatd">1234567899</td> 
                <td className="tablatd">Cabrera Leyton Hernando</td>
                <td className="tablatd">Pendiente</td> 
                <td className="tablatd">Vendedor</td>
            </tr>
            <tr> 
                <td className="tablatd">1234567899</td> 
                <td className="tablatd">Egas Realpe Mauro Alberto</td>
                <td className="tablatd">Pendiente</td> 
                <td className="tablatd">Vendedor</td>
            </tr>
            <tr> 
                <td className="tablatd">1234567899</td> 
                <td className="tablatd">Grijalba Gomez Pedro Felipe</td>
                <td className="tablatd">Pendiente</td> 
                <td className="tablatd">Vendedor</td>
            </tr>
            <tr> 
                <td className="tablatd">1234567899</td> 
                <td className="tablatd">Hidalgo Otero Ana Liliana</td>
                <td className="tablatd">Pendiente</td> 
                <td className="tablatd">Vendedor</td>
            </tr>
            </tbody>
            </table>
            </form>
            </div> 

        </div>
    )
}

export default ListaUsuarios
