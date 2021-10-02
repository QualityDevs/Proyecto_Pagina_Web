import React from 'react'

const AdministracionVentas = () => {
    return (
        <div>
            
            <form className="busqueda">

        Buscar por:<select className='colorborde'>
        <option>ID venta</option>
        <option>Docuento cliente</option>
        <option>Nombre cliente</option>
        </select>

        <input type="search" className='colorborde' />
        <input type="submit" value="Buscar" className='colorborde'/>

        
        </form>
  

    <div className="tsergio">
        <table>
            <thead>
                <tr>
                    <th>ID venta</th>
                    <th>Fecha </th>
                    <th>Unidades</th>
                    <th>responsable</th>
                    <th>Total venta</th>
                    <th>Estado</th>
                    <th>acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><a href="" className='mver'>Ver</a>     
                        <a href="">Editar</a> </td>
                </tr>
                <tr className="sombra">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className="sombra">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className="sombra">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td> 
                    <td></td>
                </tr>
                <tr className="sombra">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td> 
                    <td></td>
                </tr>

            </tbody>
        </table>
    </div>
            
        </div>
    )
}

export default AdministracionVentas;
