import React from 'react'
import '../styles/styles-sergio.css'

const RegistroVentas = () => {
    return (
        <div>
            <div className="tsergio estadoventa" >
                <table>
                    <thead>
                        <tr>
                            <th>Estado de venta</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div className="tsergio">
                <table>
                    <thead>
                        <tr>
                        <th>ID Venta</th>
                        <th>Fecha pedido</th>
                        <th>Hora</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            
            <div className="tsergio">
                <table>
                    <thead>
                        <tr>
                        <th>Cliente</th> 
                        <th>Docuento de identidad</th> 
                        <th>Responsable</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td></td>
                            <td>001</td>
                            <td>1111111111</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <form className='fsergio'>

                Agregar por:<select className='colorborde'>
                <option >ID producto</option>
                <option>Nombre producto</option>
                </select>

                <input type="search" className='colorborde' />
                Unidades <input type="number" className='colorborde' />
                <input type="submit" value="agregar" className='colorborde'/>

                
                </form>
                
            <div className="tsergio">
                <table>
                    <thead>
                        <tr>
                            <th>ID productos</th>
                            <th>Nombre producto</th>
                            <th>Unidades</th>
                            <th>Precio unidad</th>
                            <th>Total unidades</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
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
                        </tr>
                        <tr>
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
                        </tr>
                        <tr>
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
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <th className="total">total</th>
                            <td>1111</td>
                        </tr>

                    </tbody>
                </table>
            </div>

           

            <button type="submit" className="bsergio">Crear venta</button>
        </div>
    )
}

export default RegistroVentas;