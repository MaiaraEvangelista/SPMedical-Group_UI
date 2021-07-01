//importação do react
import {Component}  from 'react';


class Consultas extends Component{
    constructor(props){
        super(props);
        this.state=
        {
            listaConsultas : []
        }
    }

    buscarConsultas = () =>{
        fetch('http://localhost:5000/api/consultas')

        .then(resposta => resposta.json())

        .then(data => this.setState({listaConsultas : data}))

        .catch(erro => console.loog(erro))
    }

    componentDidMount(){
        this.buscarConsultas();
    }

    render(){
        return(
            <div>
                <main>
                    <section>
                        <h2>Lista de Consultas</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome do paciente</th>
                                    <th>Nome do Médico</th>
                                    <th>Horário da Consulta</th>
                                    <th>Data da Consulta</th>
                                    <th>Situação</th>
                                    <th>Descrição</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.listaConsultas.map((consulta) =>{
                                        return(
                                            <tr>
                                                <td>{}</td>
                                                <td>{}</td>
                                                <td>{}</td>
                                                <td>{}</td>
                                                <td>{}</td>
                                                <td>{}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
        )
    }
}


export default Consultas;
