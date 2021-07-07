//importação do pacote
import { Component } from "react";

//importação da page
import api from '../services/api';

//criando a classe consultas
export default class Consultas extends Component{
    constructor(props){
        super(props);
        this.state={
            listaConsultas : []
        }
    };

    //criando função de buscar consultas
    buscarConsultas = async () =>{
        //passa o item de resposta e pega info da api
        const resposta = await api.get('/consultas');
        const dadosApi  = resposta.data;
        //armazena os dados na constante
        this.setState({listaConsultas : dadosApi});
    }

    componentDidMount(){
        this.buscarConsultas();
    }

    render(){
        
    }
}