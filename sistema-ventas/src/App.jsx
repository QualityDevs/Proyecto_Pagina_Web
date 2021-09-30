import './App.css';
import Layout from './layouts/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { login } from './pages/login';
import { admin } from './pages/admin';
import { administracion_Ventas } from './pages/administracion_Ventas';
import { admin_productos } from './pages/admin_productos';
import { admin_Usuarios } from './pages/admin_Usuarios';


function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
            <Route path='/login' exact>
              <login />
            </Route>
            
          <Layout>
            
             <Route path='/admin' exact>
              <admin />
              </Route>

              <Route path='/administracion_Ventas' exact>
              <administracion_Ventas />
              </Route>

              <Route path='/admin_productos' exact>
              <admin_productos />
              </Route>

              <Route path='/admin_Usuarios' exact>
              <admin_Usuarios />
              </Route>

          </Layout>
        </Switch>
     </Router>
    </div>

  );
}

export default App;
