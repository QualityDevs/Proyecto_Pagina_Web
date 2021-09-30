import '../styles/stylesb.css';
import { CgProductHunt } from "react-icons/cg";
import { BiArchive } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi"
import { RiUserSettingsLine } from "react-icons/ri"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


const Sidebar = () => {
    return (
        <div class="collapse" id="navbarToggleExternalContent" className="sidebar">
            <ul>

                <li>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#listProductos" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <CgProductHunt className="boton" /> <a href="#" className="sletra"> Productos</a> <FiChevronDown className="boton" />
                    </button>

                    <div class="collapse " id="listProductos" className="lista-desplegable">
                        <div class="list-group">
                            <li><a href="#" className="sletras"> Lista de Productos</a></li>
                            <li><a href="/admin_productos" className="sletras"> Administrar Productos</a></li>
                        </div>
                    </div>
                </li>

                <li>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#listVentas" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <BiArchive className="boton" /> <a href="#" className="sletra"> Ventas</a> <FiChevronDown className="boton" />
                    </button>

                    <div class="collapse" id="listVentas" className="lista-desplegable">
                        <div class="list-group">
                            <li><a href="#" className="sletras"> Registro de Ventas</a></li>
                            <li><a href="#" className="sletras"> Administrar Ventas</a></li>
                        </div>
                    </div>
                </li>


                <li>
                    <RiUserSettingsLine className="boton" /><a href="#" className="sletra"> Usuarios</a>
                </li>


                <li>
                    <FiLogOut className="boton" /><a href="#" className="sletra"> Salir</a>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;