//importação do react
import { Component } from "react";

//criando a classe de Consultas Médico
class ConsultasMedico extends Component{
    //criando um constructor com as propriedades
    constructor(props){
        //referência as propriedades
        super(props);
        this.state = {
            //apresenta os dados
            listaConsultas : [],
            alterarConsulta : '',
            idConsultaAlterada : 0,
            situacao : '',
            idSituacaoAlterada : 0
        }
    }

    //funçaõ de busca de consultas
    buscarConsultas = () =>{
        //faz a chamada para API usando a rota 
        fetch('http://localhost:5000/api/consultasmedico', {
            headers :{
                'Authorization' : 'Bearer' + localStorage.getItem('usuario-login')
            }
        })

        //tratativa
        .then(resposta =>{
            //se a resposta não for 200
            if (resposta !== 200) {
                //apresenta um erro
                throw Error();
            }
            //retorna um json
            return resposta.json();
        })

        //faz atualização com os dados recebidos
        .then(resposta => this.setState({listaConsultas : resposta}))

        //mostra mensagem de erro
        .catch((erro) => console.log(erro))
    }


    //inicia uma função
    componentDidMount(){
        this.buscarConsultas();
    }

    //função de atualização de campo
    atualizaSituacao = async (event) =>{
        await this.setState({situacao : event.target.value})
        //mosrtra no console
        console.log(this.state.situacao)  
    };

    //função que limpa os camposapós a inserção
    limparCampo = () =>{
        //passa os valores a serem limpos
        this.setState({
            situacao : '',
            idConsultaAlterada : 0
        })
    }

    //montagem da estrutura
    render(){
        return(
            <div>
                <main>
                    <section>
                        <h2>Lista das Consultas</h2>
                        <table>

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Situação da Consulta</th>
                                    <th>Nome do Paciente</th>
                                    <th>Horário Consulta</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.listaConsultas.map((consultaEscolhida) =>{
                                        return(
                                            <tr>
                                                <td>{consultaEscolhida.idConsulta}</td>
                                                <td>{consultaEscolhida.situacao}</td>
                                                <td>{consultaEscolhida.nomePaciente}</td>
                                                <td>{consultaEscolhida.horario}</td>
                                                
                                                <td><button onClick={() => this.state.buscarConsultas(consultaEscolhida)}>Editar</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </section>

                    <section>
                        {
                            <button type="submit" disabled={this.state.situacao === '' ? 'none' : ''}>
                                {this.state.idSituacaoAlterada === 0 ? 'Cadastrar' : 'Atualizar'}
                            </button>
                        }

                            <button type="button" onClick={this.limparCampo}>
                                Cancelar
                            </button>

                        {
                            this.state.idSituacaoAlterada !==0 &&
                            <div>
                                <p>A situação da consulta <strong>{this.state.idSituacaoAlterada}</strong>está sendo editada</p>
                                <p>Caso queira cancelar, clique no botão</p>
                            </div>
                        }
                    </section>
                </main>
            </div>
        )
    }
}

//faz a exportação da classe para reutilização
export default ConsultasMedico;