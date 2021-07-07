//importação do react
import {Component} from 'react';

//Criação da classe consultas
class Consultas extends Component{
    //criando um construtor que vai ter as propriedades
    constructor(props){
        //referencia o "this". Permite a chamada
        super(props);
        this.state = {
            //apresenta as propriedades
            listaConsultas : [],
            idConsulta : 0,
            situacao : '',
            idSituacaoAlterada : 0,
            consulta : ''
        }
    }

    //funçaõ da busca de consultas
    buscarConsultas = () =>{
        fetch('http://localhost:5000/api/consultas', {
            headers :{
                'Authorization' : 'Bearer' + localStorage.getItem('usuario-login')
            }
        })

        //quando a resposta for
        .then(resposta =>{
            //diferente de 200
            if (resposta !== 200) {
                //mostra uma mensagem de erro
                throw  Error();
            }
            //mostra a resposta em json
            return resposta.json();
        })
    };

    //função de cadastro
    cadastrarConsulta = (event) =>{
        //evita o comportamento padrão do navegador
        event.preventDefault();

        //se o id for fiferente de 0
        if (this.state.idConsulta !== 0) {
            //passa a rota
            fetch('http://localhost:5000/api/consultas/' + this.state.idConsulta, 
            {
                //define o método de cadastro
                method: 'PUT',
                //resposta em JSON 
                body : JSON.stringify({
                    //parâmetros
                    situacaoConsulta : this.state.idSituacaoAlterada
                }),

                headers :{
                    "Content-Type" : "application/json",
                    //sistema de autorização
                    'Authorization' : 'Bearer' + localStorage.getItem('usuario-login')
                }
            })

            //se a resposta 
            .then(resposta =>{
                //for igual a 204
                if (resposta === 204) {
                    //mostra a mensagem no console de confirmação do método
                    console.log(
                        'Consulta' + this.state.idSituacaoAlterada + 'atualizada',
                        'A nova situação é :' +this.state.situacao 
                    );
                };
            })
            //chama função criada
            .then(this.buscarConsultas)
            .then(this.limparCampos)
        }
        else{
            fetch('http://localhost:5000/api/consultas', {
                method : 'POST',
                body : JSON.stringify({situacaoConsulta : this.state.idSituacaoAlterada}),
                headers :{
                    "Content-Type" : "application/json",
                    'Authorization' : 'Bearer' + localStorage.getItem('usuario-login')
                } 
            })
        }
    }

    //função de atualização
    atualizaConsulta = async (event) =>{
        await this.setState({consulta : event.target.value})
        this.setState({situacao : event.target.value})
        //apenas mostra no console
        console.log(this.state.consulta)
        console.log(this.state.situacao)
    }

    //inicia uma função
    componentDidMount(){
        this.buscarConsultas();
    }

    //função para excluir uma consulta
    excluirConsulta = (consultaEscolhida) =>{

        //faz a chamada para a API passando a URL, e o id
        fetch('http://localhost:5000/api/consultas/' +consultaEscolhida.idConsulta, {
            //define que o método é para excluir
            method : 'DELETE',
            //passa cabeçalho
            headers :{
                'Authorization' : 'Bearer' + localStorage.getItem('usuario-login')
            }
        })

        //caso a resposta seja igual a 204
        .then(resposta =>{
            if (resposta.status ===204) {
                //mostra no console a confirmação
                console.log('Consulta' + consultaEscolhida.idConsulta + 'excluída')
            }
        })

        //mostra mensagem de erro no console
        .catch(erro => console.log(erro))
    }

    limparCampos =() =>{
        this.setState({
            consulta : '',
            idConsulta : 0,
            situacao : '',
            idSituacaoAlterada : 0
        })
    }

    render(){
        return(
            <div>
                <main>
                    <section>
                        <h2>Lista Consultas</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    {/* <th>Consulta</th> */}
                                    <th>Médico</th>
                                    <th>Horário</th>
                                    <th>Situação</th>
                                    <th>Nome do Paciente</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.listaConsultas.map((consultaEscolhida) => {
                                        return(
                                            <tr>
                                                <td>{consultaEscolhida.idConsulta}</td>
                                                <td>{consultaEscolhida.nomeMedico}</td>
                                                <td>{consultaEscolhida.horario}</td>
                                                <td>{consultaEscolhida.situacaoConsulta}</td>
                                                <td>{consultaEscolhida.nomePaciente}</td>
                                                
                                                <td><button onClick={() => this.buscarConsultas(consultaEscolhida)}>Editar</button></td>
                                                <button onClick={() => this.excluirConsulta(consultaEscolhida)}>Excluir</button>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <form>
                            <div>
                                <input
                                    type="text"
                                    id="nome-consulta"
                                    value={this.state.consulta}
                                    onChange={this.atualizaConsulta}
                                    placeholder="consulta"
                                
                                />

                                {
                                    <button>
                                        {this.state.idSituacaoAlterada === 0? 'Cadastrar' : 'Atualizar'}
                                    </button>
                                }

                                <button type="button" onClick={this.limparCampos}>
                                    Cancelar
                                </button>

                                {
                                    this.state.idSituacaoAlterada !==0 &&
                                    <div>
                                        <p>A cinsulta <strong>{this.state.idSituacaoAlterada}</strong>está sendo editada</p>
                                        <p>Pressione o botão de cancelar caso queira encerrar o processo</p>
                                    </div>
                                }
                            </div>
                        </form>
                    </section>
                </main>
            </div>
        )
    }
}

//faz a exportação da classe para reutilização
export default Consultas;