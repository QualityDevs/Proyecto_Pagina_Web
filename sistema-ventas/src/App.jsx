import './App.css';
import Layout from './layouts/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { login } from './pages/login';
import { admin } from './pages/admin';
import { administracion_Ventas } from './pages/administracion_Ventas';


function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Layout>
            <Route path='/login' exact>
              <login />

            </Route>


          </Layout>
        </Switch>
     </Router>
    </div>

  );
}

export default App;
