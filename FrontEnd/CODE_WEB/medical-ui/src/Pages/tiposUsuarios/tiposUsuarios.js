//Um modo de imporatar o react usando o component
import {Component} from 'react';

//Criando a função de tipos usuários
class TiposUsuarios extends Component{
    constructor(props){
        //permite o referenciamento do this
        super(props);
        //Criação do objeto 
        this.state = {
            listaTiposUsuarios : [],
            tipos : ''
        }
    }
    
    //Criando a função de tipos usuários
    buscarTiposUsuarios = () =>{
        //Caminho da requisição
        fetch('http://localhost:5000/api/tiposusuarios')

        //Faz a conversão da resposta recebida para json
        .then(resposta => resposta.json())

        //Pega os dados recebidos e armazena em data
        .then(data => this.setState({listaTiposUsuarios : data}))

        //Caso dê erro mostra no consoele
        .catch(erro => console.log(erro))
    };

    //Criando a função de atualização do tipo
    atualizaTipoUsuario =  async (event) =>{
        await this.setState({tipos : event.target.value})
        //console.log(this.state.tipos)
    };

    //Cria a função de cadastro de um tipo de usuário
    cadastrarTipoUsuario = (event) =>{
        //Evita o comportamento padrão do navegador
        event.preventDefault();
        //Passando a rota
        fetch('http://localhost:5000/api/tiposusuarios', {
            //Declarando o método
            method : 'POST',
            //---------REVER-------
            body : JSON.stringify({tipoUsuario :  this.state.tipos}),

            headers :{
                "Content-type" : "application/json"
            }
        })

        .then (console.log('cadastrado'))

        //Caso dê erro mostra no console
        .catch(erro => console.log(erro))

        //Faz a atualização
        .then(this.buscarTiposUsuarios);
    };

    //Inicia o "nascimento" de uma função
    componentDidMount(){
        //Inicia a busca da função(L16)
        this.buscarTiposUsuarios();
       // this.cadastrarTipoUsuario();
    };

    render(){
        return(
            <div>
                <main>
                    <section>
                        {/* Lista de tipos de usuários */}
                        <h2>Lista de Tipos Usuarios</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th> {/*Identificador  */}
                                    <th>Tipos</th>{/* Os tipos de usuários */}
                                </tr>
                            </thead>

                            <tbody>
                                {                                       //nome qualquer atribuído
                                    this.state.listaTiposUsuarios.map( (tipoUsuario) =>{
                                        return(  //Ainda em modificação
                                            <tr key={tipoUsuario.idTipoUsuario}>
                                                <td>{tipoUsuario.idTipoUsuario}</td>
                                                <td>{tipoUsuario.tipos}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </section>

                    <section>
                        {/* Cadastro dos usuários */}
                        <h2>Cadastro de Tipos Usuários</h2>
                        <form onSubmit={this.cadastrarTipoUsuario}>{/* cadas..L37 */}
                            <div>
                                <input
                                    type = "text"
                                    value = {this.state.tipos}
                                    ocChange = {this.atualizaTipoUsuario}//L31 
                                    placeholder = "Tipo de Usuário"
                                />
                                
                                <button type="submit">Cadastro</button>
                            </div>
                        </form>
                    </section>
                </main>
            </div>
        )
    }
}

//Permite a exportação do tipos para ser usada em outros locais
export default TiposUsuarios;
