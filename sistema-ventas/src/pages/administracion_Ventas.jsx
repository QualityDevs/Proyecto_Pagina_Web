import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles-sergio.css'
import axios from 'axios';
import { eliminarVenta } from '../utils/api';
import { useHistory } from 'react-router';

const AdministracionVentas = () => {
    const [ventas, setVentas]= useState([]);
    const [ventasf, setVentasf] = useState([]);

    const buscar = (valor) => {
        setVentasf(ventas.filter((elemento) => {
            return JSON.stringify(elemento).toLowerCase().includes(valor);
        }))
      }


    let history = useHistory();

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
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="busqueda" class="labels" >Buscar por:  </label>
                    <input className='colorborde'  onChange={(e) => buscar(e.target.value.toLocaleLowerCase())}/>
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
                            <th>ACCIONES</th>
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
                                    <td>
                                    <div>
                                    <Link to="/editar_venta"><button type="button" class="btn btn-primary">Ver</button></Link>
                                    <button type="button" class="btn btn-danger" onClick={() => {eliminarVenta(elemento._id); history.push('/administracion_Ventas')}}>Eliminar</button>
                                    </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default AdministracionVentas;
