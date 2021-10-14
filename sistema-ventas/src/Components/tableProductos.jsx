import '../styles/stylesp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import { obtenerVehiculos } from 'utils/api';
import 'react-toastify/dist/ReactToastify.css';


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
                                    <div>
                                        <Link to="/productos/admin_editar_producto"><button type="button" class="btn btn-primary">Editar</button></Link>
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

//cambios para conectar tabla productos con backend

const TablaVehiculos = ({ listaVehiculos, setEjecutarConsulta }) => {
    const [busqueda, setBusqueda] = useState('');
    const [vehiculosFiltrados, setVehiculosFiltrados] = useState(listaVehiculos);
  
    useEffect(() => {
      setVehiculosFiltrados(
        listaVehiculos.filter((elemento) => {
          return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
        })
      );
    }, [busqueda, listaVehiculos]);
  
    return (
      <div className='flex flex-col items-center justify-center w-full'>
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder='Buscar'
          className='border-2 border-gray-700 px-3 py-1 self-start rounded-md focus:outline-none focus:border-indigo-500'
        />
        <h2 className='text-2xl font-extrabold text-gray-800'>Todos los vehículos</h2>
        <div className='hidden md:flex w-full'>
          <table className='tabla'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre del vehículo</th>
                <th>Marca del vehículo</th>
                <th>Modelo del vehículo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {vehiculosFiltrados.map((vehiculo) => {
                return (
                  <FilaVehiculo
                    key={nanoid()}
                    vehiculo={vehiculo}
                    setEjecutarConsulta={setEjecutarConsulta}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div className='flex flex-col w-full m-2 md:hidden'>
          {vehiculosFiltrados.map((el) => {
            return (
              <div className='bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl'>
                <span>{el.name}</span>
                <span>{el.brand}</span>
                <span>{el.model}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  const FilaVehiculo = ({ vehiculo, setEjecutarConsulta }) => {
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevoVehiculo, setInfoNuevoVehiculo] = useState({
      _id: vehiculo._id,
      name: vehiculo.name,
      brand: vehiculo.brand,
      model: vehiculo.model,
    });
  
    const actualizarVehiculo = async () => {
      //enviar la info al backend
      const options = {
        method: 'PATCH',
        url: `http://localhost:5000/vehiculos/${vehiculo._id}/`,
        headers: { 'Content-Type': 'application/json' },
        data: { ...infoNuevoVehiculo },
      };
  
      await axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          toast.success('Vehículo modificado con éxito');
          setEdit(false);
          setEjecutarConsulta(true);
        })
        .catch(function (error) {
          toast.error('Error modificando el vehículo');
          console.error(error);
        });
    };
  
    const eliminarVehiculo = async () => {
      const options = {
        method: 'DELETE',
        url: 'http://localhost:5000/vehiculos/eliminar/',
        headers: { 'Content-Type': 'application/json' },
        data: { id: vehiculo._id },
      };
  
      await axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          toast.success('vehículo eliminado con éxito');
          setEjecutarConsulta(true);
        })
        .catch(function (error) {
          console.error(error);
          toast.error('Error eliminando el vehículo');
        });
      setOpenDialog(false);
    };
  
    return (
      <tr>
        {edit ? (
          <>
            <td>{infoNuevoVehiculo._id}</td>
            <td>
              <input
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                type='text'
                value={infoNuevoVehiculo.name}
                onChange={(e) => setInfoNuevoVehiculo({ ...infoNuevoVehiculo, name: e.target.value })}
              />
            </td>
            <td>
              <input
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                type='text'
                value={infoNuevoVehiculo.brand}
                onChange={(e) =>
                  setInfoNuevoVehiculo({ ...infoNuevoVehiculo, brand: e.target.value })
                }
              />
            </td>
            <td>
              <input
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                type='text'
                value={infoNuevoVehiculo.model}
                onChange={(e) =>
                  setInfoNuevoVehiculo({ ...infoNuevoVehiculo, model: e.target.value })
                }
              />
            </td>
          </>
        ) : (
          <>
            <td>{vehiculo._id.slice(20)}</td>
            <td>{vehiculo.name}</td>
            <td>{vehiculo.brand}</td>
            <td>{vehiculo.model}</td>
          </>
        )}
        <td>
          <div className='flex w-full justify-around'>
            {edit ? (
              <>
                <Tooltip title='Confirmar Edición' arrow>
                  <i
                    onClick={() => actualizarVehiculo()}
                    className='fas fa-check text-green-700 hover:text-green-500'
                  />
                </Tooltip>
                <Tooltip title='Cancelar edición' arrow>
                  <i
                    onClick={() => setEdit(!edit)}
                    className='fas fa-ban text-yellow-700 hover:text-yellow-500'
                  />
                </Tooltip>
              </>
            ) : (
              <>
                <Tooltip title='Editar Vehículo' arrow>
                  <i
                    onClick={() => setEdit(!edit)}
                    className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500'
                  />
                </Tooltip>
                <Tooltip title='Eliminar Vehículo' arrow>
                  <i
                    onClick={() => setOpenDialog(true)}
                    className='fas fa-trash text-red-700 hover:text-red-500'
                  />
                </Tooltip>
              </>
            )}
          </div>
          <Dialog open={openDialog}>
            <div className='p-8 flex flex-col'>
              <h1 className='text-gray-900 text-2xl font-bold'>
                ¿Está seguro de querer eliminar el vehículo?
              </h1>
              <div className='flex w-full items-center justify-center my-4'>
                <button
                  onClick={() => eliminarVehiculo()}
                  className='mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'
                >
                  Sí
                </button>
                <button
                  onClick={() => setOpenDialog(false)}
                  className='mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md'
                >
                  No
                </button>
              </div>
            </div>
          </Dialog>
        </td>
      </tr>
    );
  };
  
  const FormularioCreacionVehiculos = ({ setMostrarTabla, listaVehiculos, setVehiculos }) => {
    const form = useRef(null);
  
    const submitForm = async (e) => {
      e.preventDefault();
      const fd = new FormData(form.current);
  
      const nuevoVehiculo = {};
      fd.forEach((value, key) => {
        nuevoVehiculo[key] = value;
      });
  
      const options = {
        method: 'POST',
        url: 'http://localhost:5000/vehiculos/nuevo/',
        headers: { 'Content-Type': 'application/json' },
        data: { name: nuevoVehiculo.name, brand: nuevoVehiculo.brand, model: nuevoVehiculo.model },
      };
  
      await axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          toast.success('Vehículo agregado con éxito');
        })
        .catch(function (error) {
          console.error(error);
          toast.error('Error creando un vehículo');
        });
  
      setMostrarTabla(true);
    };
  
    return (
      <div >
        <h2 >Crear nuevo vehículo</h2>
        <form ref={form} onSubmit={submitForm} >
          <label htmlFor='nombre'>
            Nombre del vehículo
            <input
              name='name'
              type='text'
              placeholder='Corolla'
              required
            />
          </label>
          <label htmlFor='marca'>
            Marca del vehículo
            <select
              
              name='brand'
              required
              defaultValue={0}
            >
              <option disabled value={0}>
                Seleccione una opción
              </option>
              <option>Renault</option>
              <option>Toyota</option>
              <option>Ford</option>
              <option>Mazda</option>
              <option>Chevrolet</option>
            </select>
          </label>
          <label htmlFor='modelo'>
            Modelo del vehículo
            <input
              name='model'
              
              type='number'
              min={1992}
              max={2022}
              placeholder='2014'
              required
            />
          </label>
  
          <button
            type='submit'
          >
            Guardar vehiculo
          </button>
        </form>
      </div>
    );
  };
  