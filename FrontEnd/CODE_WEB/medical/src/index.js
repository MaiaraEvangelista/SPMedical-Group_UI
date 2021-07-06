//importação dos "pacotes"
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from  'react-router-dom';

//importação das pages (Possibilita a navegação entre as pages)
import './index.css';
import App from './Pages/Home/App';
import ConsultasMedico from './Pages/Consultas/consultasMedico';
import ConsultasPaciente from './Pages/Consultas/ConsultasPaciente';
import NotFound from './Pages/notFound/notFound';
import Login from './Pages/Login/login.js';
import Consultas from './Pages/Consultas/consultas.js';


//importação de arquivos
import reportWebVitals from './reportWebVitals';
//import { usuarioAutenticado } from './services/auth';


//criando permissão apenas para administrador
// const PermissaoAdm = ({component : Component}) =>(
//   <Route
//     //Instânciamento do props
//     render = { props =>
//      //Faz a verificação para saber se o usuário é ADM
//       usuarioAutenticado() && parseJwt().role === "1" ?
//        //Renderiza de acordo com a autorização
//       <Component {...props} /> :
//        //Se não for, manda paraa login
//       <Redirect to = 'login'/>
//     }
//   />
// );

//criação da constante de rotas
const routing = (
  //iniciando "organização das rotas"
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>{/* Página home */}
        <Route path="/consultasmedico" component={ConsultasMedico}/>{/* Consultas Médico */}
        <Route path="/consultaspaciente" component={ConsultasPaciente}/>{/* consultas Paciente */}
        <Route path="/notfound" component={NotFound}/>{/* Página de erro */}
        {/* <Redirect to="/notfound" />Página de erro notfound */}
        <Route path="/login" component={Login}/>{/* Página de login */}
        <Route path="/consultas" component={Consultas}/>{/*Página consultas */} 
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
