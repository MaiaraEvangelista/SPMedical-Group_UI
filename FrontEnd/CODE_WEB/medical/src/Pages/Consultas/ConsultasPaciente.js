//importação do react
import { Component } from "react";

//criação da classe consultas Paciente
class ConsultasPaciente extends Component{
    //criando um constructor com as propriedades
    constructor(props){
        //referência as propriedades
        super(props);
        this.state = {
            listarConsultas : []
        }
    }

    //inicia uma função
    componentDidMount(){

    }

    render(){
        return(
            <div>
                <main>
                    <section>
                        <h2>Listar Minhas Consultas</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>situação Consulta</th>
                                    <th>nome Médico</th>
                                    <th>horário Consulta</th>
                                    <th>especialidade Médico</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.listarConsultas.map( (consulta) => {
                                        return(
                                            <tr>
                                                <td>{consulta}</td>
                                                <td>{consulta}</td>
                                                <td>{consulta}</td>
                                                <td>{consulta}</td>
                                                <td>{consulta}</td>
                                                <td>{consulta}</td>
                                            </tr>
                                        )
                                    } )
                                }
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
        )
    }
}

//faz exportação da classe para reutilização
export default ConsultasPaciente;