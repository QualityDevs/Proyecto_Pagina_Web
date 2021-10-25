import Button from '@restart/ui/esm/Button';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles-sergio.css';
import axios from 'axios';






const RegistroVentas = () => {
    const [ventas, setVentas] = useState([]);
    const [ventasf, setVentasf] = useState([]);

    const buscar = (valor) => {
        setVentasf(ventas.filter((elemento) => {
            return JSON.stringify(elemento).toLowerCase().includes(valor);
        }))
      }

    useEffect(async () => {
        const options = {
            method: 'GET',
            url: 'http://localhost:5000/sales'
        };

        await axios.request(options).then((response) => {
            setVentas(response.data);
            setVentasf(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    return (
        <div>
            <div style={{ padding: 12 }}>
                <Link to="/crear_venta"><button type="button" class="btn btn-success">CREAR VENTA</button></Link>
            </div>
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="busqueda" class="labels" >Buscar por:  </label>
                    <input className='colorborde' onChange={(e) => buscar(e.target.value.toLocaleLowerCase())}/>
            
                </div>
            </form>


            <div className="tsergio">
                <table>
                    <thead>
                        <tr>
                            <th>ID VENTA</th>
                            <th>FECHA </th>
                            <th>UNIDADES</th>
                            <th>RESPONSABLE</th>
                            <th>TOTAL VENTA</th>
                            <th>ESTADO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ventasf.map((elemento) => (
                                <tr>
                                    <td>{elemento._id}</td>
                                    <td>{elemento.fecha}</td>
                                    <td>{elemento.unidades}</td>
                                    <td>{elemento.responsable}</td>
                                    <td>{new Intl.NumberFormat().format(elemento.total)}</td>
                                    <td>{elemento.estado}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default RegistroVentas;
