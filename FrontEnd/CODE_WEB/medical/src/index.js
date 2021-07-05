//importação dos "pacotes"
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from  'react-router-dom';

//importação das pages (Possibilita a navegação entre as pages)
import './index.css';
import App from './Pages/Home/App';
import ConsultasMedico from './Pages/Consultas/consultasMedico';
import ConsultasPaciente from './Pages/Consultas/ConsultasPaciente';
import NotFound from './Pages/notFound/notFound';


//importação de arquivos
import reportWebVitals from './reportWebVitals';

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
        {/* <Route path="/" component={App}/>{/* Página home */}
        {/* <Route path="/" component={App}/>Página home */} 
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
