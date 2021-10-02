import './App.css';
import Layout from './layouts/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Login  from './pages/login';
import  Admin  from './pages/admin';
import  AdministracionVentas  from './pages/administracion_Ventas';
import  Adminproductos  from './pages/admin_productos';
import  AdminUsuarios  from './pages/admin_Usuarios';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           <Route path={['/admin', '/administracion_Ventas', '/admin_Usuarios', '/admin_productos', '/login']} exact>
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
                
                <Route path='/login' exact>
                  <Login/>
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
