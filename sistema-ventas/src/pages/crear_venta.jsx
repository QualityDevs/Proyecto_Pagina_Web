import React, { useEffect, useState } from 'react';
import '../styles/styles-sergio.css'
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { RiAddLine } from "react-icons/ri";


const CrearVenta = () => {
    const [show, popup] = useState(false);
    const modalOpen = () => popup(true);
    const modalClose = () => popup(false);
    const [productos, setProductos] = useState([]);
    const [productosa, setProductosa] = useState([]);
    const [vendedores, setVendedores] = useState([]);
    const [fecha, setFecha] = useState(new Date());
    const [hora, setHora] = useState("");
    const [estadov, setEstadov] = useState("En Proceso");
    const [cliente, setCliente] = useState("");
    const [numerodoc, setNumeroDoc] = useState("");
    const [responsable, setResponsable] = useState("0")
    const [elem, setElemento] = useState("0");
    const [cant, setcant] = useState(1);
    const [suma, setSuma] = useState(0);
    const [mensaje, setMensaje] = useState("");
    const [unidades, setUnidades] = useState(0);

    const sumarvalores = () => {
        var valor = 0;
        productosa.map((elemento) => valor = Number(valor) + Number(elemento.ptotal));
        setSuma(valor);
    }

    const SumarUnidades = () => {
        var valor = 0;
        productosa.map((elemento) => valor = Number(valor) + Number(elemento.unidades));
        setUnidades(valor);
    }

    const CrearVenta = async () => {
        if (hora.toString().length > 0 && cliente.toString().length > 0 && numerodoc.valueOf().length > 0 && responsable.toString().length > 0 && responsable != "0" &&
            productosa.length > 0) {
            const options = {
                method: 'POST',
                url: 'http://localhost:5000/sales/new',
                headers: { 'Content-Type': 'application/json' },
                data: { fecha: fecha, hora: hora, estado: estadov, cliente: cliente, numerodoc: numerodoc, responsable: responsable, productos: productosa, total: suma, unidades: unidades },
            };
            console.log(responsable);
            await axios.request(options).then((response) => {
                setMensaje(<div><p>Producto creado exitosamente</p>
                </div>);
                modalOpen();
            }).catch(function (error) {
                setMensaje(error.toString());
                modalOpen();
            });
        }else {
        setMensaje(<h5>Debe llenar y seleccionar todos los campos. Ademas debe agregar al menos un producto</h5>);
    modalOpen();
}
console.log("Entro");
    }


useEffect(async () => {
    const options = {
        method: 'GET',
        url: 'http://localhost:5000/productos'
    };

    await axios.request(options).then((response) => {
        setProductos(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}, []);

useEffect(async () => {
    const options = {
        method: 'GET',
        url: 'http://localhost:5000/users'
    };

    await axios.request(options).then((response) => {
        setVendedores(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}, []);


return (
    <div>
        <div>
            <Modal show={show} onHide={modalClose}>
                <Modal.Header>
                    <button type="button" class="btn btn-danger" onClick={modalClose}> Cerar</button>
                </Modal.Header>
                <Modal.Body>
                    {mensaje}
                </Modal.Body>
            </Modal>
        </div>


        <div className="tsergio">
            <table>
                <thead>
                    <tr>
                        <th>FECHA PEDIDO</th>
                        <th>HORA</th>
                        <th>ESTADO DE LA VENTA</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td><DatePicker selected={fecha} onChange={(date) => setFecha(date)}></DatePicker></td>
                        <td><input value={hora} onChange={(e) => setHora(e.target.value)}></input></td>
                        <td>
                            <select defaultValue={estadov} onChange={(e) => setEstadov(e.target.value)}>
                                <option value="En proceso">En proceso</option>
                                <option value="Cancelada">Cancelada</option>
                                <option value="Entregada">Entregada</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


        <div className="tsergio">
            <table>
                <thead>
                    <tr>
                        <th>CLIENTE</th>
                        <th>DOCUMENTO DE IDENTIDAD</th>
                        <th>RESPONSABLE</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td><input value={cliente} onChange={(e) => setCliente(e.target.value)}></input></td>
                        <td><input value={numerodoc} onChange={(e) => setNumeroDoc(e.target.value)}></input></td>
                        <td><select defaultValue={responsable} onChange={(e) => setResponsable(e.target.value)} >
                            <option value="0">Seleccione el vendedor</option>
                            {
                                vendedores.map((elemento) =>
                                    <option value={elemento.nombre}>{elemento.nombre}</option>
                                )
                            }
                        </select></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <form className="formulario">
            <label>NOMBRE DEL PRODUCTO</label>
            <select defaultValue={elem} onChange={(e) => setElemento(e.target.value)}>
                <option value="0">Seleccione un producto</option>
                {
                    productos.map((elemento) =>
                        <option value={elemento._id}>{elemento.nombre}</option>
                    )
                }
            </select>
            <input type="Number" value={cant} onChange={(e) => { if (Number(e.target.value) > 0) setcant(e.target.value) }} />
            <button type="button" class="btn btn-success" onClick=
                {() => {

                    if (undefined == productosa.find(producto => producto._id === elem)) {
                        const elemento = productos.find(producto => producto._id === elem);
                        if (elemento != undefined) {
                            const punidades = Number(cant * elemento.vunitario);
                            productosa.push(
                                { _id: elemento._id, nombre: elemento.nombre, unidades: cant, precio: elemento.vunitario, ptotal: punidades });
                            sumarvalores();
                            SumarUnidades();
                            setcant(1);
                        }
                    }

                }}>

                <RiAddLine /></button>
        </form>

        <div className="tsergio">
            <table>
                <thead>
                    <tr>
                        <th>ID PRODUCTO</th>
                        <th>NOMBRE PRODUCTO</th>
                        <th>UNIDADES</th>
                        <th>PRECIO UNIDAD</th>
                        <th>VALOR TOTAL UNIDADES</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>

                <tfoot>
                    <td className="total" colSpan="4">TOTAL</td>
                    <td colSpan="2">{new Intl.NumberFormat().format(suma)}</td>
                </tfoot>
                <tbody>
                    {
                        productosa.map((elemento) =>
                            <tr>
                                <td>{elemento._id}</td>
                                <td>{elemento.nombre}</td>
                                <td>{elemento.unidades}</td>
                                <td>{new Intl.NumberFormat().format(elemento.precio)}</td>
                                <td>{new Intl.NumberFormat().format(elemento.ptotal)}</td>
                                <td><button type="button" class="btn btn-danger" onClick={() => { var i = productosa.indexOf(productosa.find(producto => producto._id === elemento._id)); productosa.splice(i, 1); sumarvalores(); SumarUnidades() }}>Eliminar</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        <div> <button type="button" class="btn btn-success" onClick={() => CrearVenta()}>CREAR VENTA</button> </div>

    </div>
);
}

export default CrearVenta;