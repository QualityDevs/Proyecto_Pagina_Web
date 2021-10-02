import './App.css';
import Layout from './layouts/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Login  from './pages/login';
import  Home  from './pages/home';
import  AdministracionVentas  from './pages/administracion_Ventas';
import  Adminproductos  from './pages/productos/admin_productos';
import  AdminUsuarios  from './pages/admin_Usuarios';
import LayoutLogin from './layouts/Layout Login';
import RegistroVentas  from './pages/registro_Ventas';
import Productos from './pages/productos/productos';
import CrearProducto from './pages/productos/admin_crear_producto';
import EditarProducto from './pages/productos/admin_editar_producto'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        
          
        <Route path='/' exact>
              <LayoutLogin>
                 <Route path='/login' >
              </Route>
            </LayoutLogin>

          </Route>
           
           <Route path={['/home', '/administracion_Ventas', '/admin_Usuarios', '/productos/admin_productos', '/productos/productos', '/productos/admin_crear_producto','/productos/admin_editar_producto','/registro_Ventas']} exact>
            <Layout>
              <Switch>

                <Route path='/administracion_Ventas' exact>
                  <AdministracionVentas />
                </Route>

                <Route path='/productos/admin_productos' exact>
                  <Adminproductos />
                </Route>

                <Route path='/productos/productos' exact>
                  <Productos />
                </Route>

                <Route path='/productos/admin_crear_producto' exact>
                  <CrearProducto />
                </Route>

                <Route path='/productos/admin_editar_producto' exact>
                  <EditarProducto />
                </Route>

                <Route path='/admin_Usuarios' exact>
                  <AdminUsuarios />
                </Route>
                
                <Route path='/registro_Ventas' exact>
                  <RegistroVentas />
                </Route>

              </Switch>
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
