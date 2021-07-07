//importação do react
import { Component } from "react";

//criação da classe consultas Paciente
class ConsultasPaciente extends Component{
    //criando um constructor com as propriedades
    constructor(props){
        //referência as propriedades
        super(props);
        this.state = {
            listarConsultas : [],
            consultaAtualizada : '',
            idConsultaAtualizada : 0
        }
    }

    //Inicia a função de buscar as consultas na API
    buscarConsultas = () =>{
        //passa a rota que vai buscar na API
        fetch('http://localhost:5000/api/consultaspaciente', {
            headers :{
                //pega a autorização e armazena
                'Authorization' : 'Bearer' + localStorage.getItem('usuario-login')
            }
        })

        //quando a resposta for
        .then(resposta => {
            //Diferente de 200
            if (resposta !== 200) {
                //erro
                throw Error();
            };
            //retorna a resposta em Json
            return resposta.json();
        })
    }

    //inicia uma função
    componentDidMount(){
        //faz a iniciação da busca das consultas
        this.buscarConsultas();
    }

    //função de atualização
    atualizarConsulta = async(event) =>{
        await this.setState({consultaAtualizada : event.target.value})
        console.log(this.state.consultaAtualizada)
    };

    //----------------OBSERVAR POSSÍVEL RETIRADA
    limparCampo = () =>{
        this.setState({
            idConsultaAtualizada : 0
        })
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
                                                <td>{consulta.idConsulta}</td>
                                                <td>{consulta.nomeMedico}</td>
                                                <td>{consulta.horario}</td>
                                                <td>{consulta.especialidade}</td>
                                                {/* <td>{consulta}</td>
                                                <td>{consulta}</td> */}

                                                {/* <td><button onClick={() => this.state.buscarConsultas(consulta)}></button></td> */}
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