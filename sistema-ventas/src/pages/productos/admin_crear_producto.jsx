import '../../styles/stylesp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';


const CrearProducto = () => {
    const [show, popup] = useState(false);
    const modalOpen = () => popup(true);
    const modalClose = () => popup(false);
    return (
        <div className="contenedorM" >
            <div>
                <Modal show={show} onHide={modalClose}>
                    <Modal.Header>
                        <button type="button" class="btn btn-danger" onClick={modalClose}> Cerar</button>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>Producto creado correctamente:</h6>
                        <ul>
                            <li>Id:</li>
                            <li>Nombre:</li>
                            <li>Descripción:</li>
                            <li>Valor:</li>
                            <li>Estado:</li>
                        </ul>
                    </Modal.Body>
                </Modal>   
            </div>
            
            <h1> Crear un nuevo producto</h1>
            <form class="form-horizantal">
                <div class="form-group">
                    <label for="id_producto" class="labels" >Id del producto</label>
                    <input type="text" class="form-control" id="id_producto" placeholder="Ingrese el id del producto" />
                </div>

                <div class="form-group">
                    <label for="n_producto" class="labels">Nombre del producto</label>
                    <input type="text" class="form-control" id="n_producto" placeholder="Ingrese el nombre del producto" />
                </div>

                <div class="form-group">
                    <label for="d_producto" class="labels">Descripción del producto</label>
                    <input type="text" class="form-control" id="d_producto" placeholder="Ingrese la descripcion del producto" />
                </div>

                <div class="form-group">
                    <label for="v_producto" className="labels">Valor unitario</label>
                    <input type="number" class="form-control" id="v_producto" placeholder="Ingrese el valor en pesos" />
                </div>

                <div class="form-group">
                    <label for="e_producto" className="labels">Estado del producto</label>
                    <select class="form-control form-control">
                        <option>Disponible</option>
                        <option>No Disponible</option>
                    </select>
                </div>

                <div class="form-group">
                    <button type="button" class="btn btn-success" onClick={modalOpen}> Crear Producto</button>
                </div>

            </form>
        </div>
    );
}

export default CrearProducto;