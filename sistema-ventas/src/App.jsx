import './App.css';
import Layout from './layouts/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Login  from './pages/login';
import  Admin  from './pages/admin';
import  AdministracionVentas  from './pages/administracion_Ventas';
import  Adminproductos  from './pages/admin_productos';
import  AdminUsuarios  from './pages/admin_Usuarios';
import LayoutLogin from './layouts/Layout Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={'/login'}>
              <LayoutLogin>
                 <Route path='/login'>
              </Route>
            </LayoutLogin>

          </Route>
           
           <Route path={['/admin', '/administracion_Ventas', '/admin_Usuarios', '/admin_productos']} exact>
            <Layout>
              <Switch>

                <Route path='/administracion_Ventas' exact>
                  <AdministracionVentas />
                </Route>

                <Route path='/admin_productos' exact>
                  <Adminproductos />
                </Route>

                <Route path='/admin_Usuarios' exact>
                  <AdminUsuarios />
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
