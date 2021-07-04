//importação do react
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
//importação do index
import './index.css';
import Login from '.src/Pages/Login/login.js';
import App from './Pages/Home/App';
import NotFound from './Pages/notFound/notFound';
//importação da page tipos usuários
import TiposUsuarios from './Pages/tiposUsuarios/tiposUsuarios';
import reportWebVitals from './reportWebVitals';
import Consultas from './Pages/Consultas/consultas';

//Tomada de decisão, para cada url acessada, "devolve" uma page
const router = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>{/* Página home. exact(Específica que a página só vai ser a home se tiver apenas a /) */}
        <Route path="/tiposUsuarios" component={TiposUsuarios}/>{/* Página tipos usuários*/}
        <Route path="/login" component={Login}/>{/* Pg de Login */}
        <Route path="/consultas" component={Consultas}/>{/*  pg de consultas*/}
  
        <Route path="/notfound" component={NotFound}/>{/* Página notFound*/}
        <Redirect to="/notfound" component={NotFound}/>{/* Página notFound, se não encontrar outra rota, redireciona para esta rota*/}
      
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(router,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
