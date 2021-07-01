//importação do react
import {Component} from 'react';

class Medicos extends Component{
    constructor(props){
        super(props);
        this.state={
            listaConsultas : [],
            horario : ''
        }
    }
}