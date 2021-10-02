import '../styles/stylesp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';





const data = [{ id: " 001", nombre: "Zapatos Nike", descripcion: " Talla 32", v_unitario: "500.000", estado: "No Disponible" },
{ id: "002", nombre: "Zapatos Adidas", descripcion: "Talla 40", v_unitario: "450.000", estado: "Disponible" }]

class TableProductos extends Component {
    state = {
        data: data
    }

    render() {
        return (
            <Container>
                <Table hover size="sm" bordered="true">
                    <thead>
                        <tr>
                            <th>ID PRODUCTO</th>
                            <th>NOMBRE</th>
                            <th>DESCRIPCIÓN</th>
                            <th>VALOR UNITARIO</th>
                            <th>ESTADO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((elemento) => (
                            <tr>
                                <th>{elemento.id}</th>
                                <th>{elemento.nombre}</th>
                                <th>{elemento.descripcion}</th>
                                <th>{elemento.v_unitario}</th>
                                <th>{elemento.estado}</th>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        );
    }
}

class TableProductosA extends Component {
    state = {
        data: data
    }

    render() {
        return (
            <Container>
                <Table hover size="sm" bordered="true">
                    <thead>
                        <tr>
                            <th>ID PRODUCTO</th>
                            <th>NOMBRE</th>
                            <th>DESCRIPCIÓN</th>
                            <th>VALOR UNITARIO</th>
                            <th>ESTADO</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((elemento) => (
                            <tr>
                                <th>{elemento.id}</th>
                                <th>{elemento.nombre}</th>
                                <th>{elemento.descripcion}</th>
                                <th>{elemento.v_unitario}</th>
                                <th>{elemento.estado}</th>
                                <th>
                                    <div><button type="button" class="btn btn-primary">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button></div>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export {
    TableProductos,
    TableProductosA
}
