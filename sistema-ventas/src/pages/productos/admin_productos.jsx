import React from 'react'
import { Link } from 'react-router-dom';
import { TableProductosA } from '../../Components/tableProductos';
const Adminproductos = () => {
    return (
        <div style={{ padding: 50 }} >
            <h3>Administración de Productos</h3>
            <div>
                <form class="form-horizontal">
                    <div class="form-group" >
                        <label for="busqueda" class="labels" >Buscar por:</label>
                        <select class="form-control form-control">
                            <option>Id producto</option>
                            <option>Descripción</option>
                        </select>
                        <input type="text" class="form-control" id="busqueda" placeholder="Ingrese el valor" />
                    </div>
                </form>
            </div>
            <div style={{ padding: 10 }}>
                <TableProductosA />
            </div>
            <Link to="/productos/admin_crear_producto">
                <button type="button" class="btn btn-primary">
                    CREAR PRODUCTO
                </button>
            </Link>
        </div>

    )
}


export default Adminproductos;


