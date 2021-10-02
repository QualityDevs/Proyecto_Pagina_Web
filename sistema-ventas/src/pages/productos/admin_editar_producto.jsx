import '../../styles/stylesp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

 
const EditarProducto = () => {
    return (
        <div className="contenedorM" >
            <h1> Editar producto</h1>
            <form class="form-horizantal">

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
                    <button type="button" class="btn btn-success"> CAMBIAR </button>
                </div>

            </form>
        </div>
    );
}

export default EditarProducto;