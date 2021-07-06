//importação do react
import {Component} from 'react';
import axios from 'axios';
import {parseJwt, usuarioAutenticado} from '../../services/auth';

//Criando a classe de login
class Login extends Component{
    //criando um constructor com as propriedades
    constructor(props){
        //referência as propriedades
        super(props);
        //instância
        this.state = {
            email : '',
            senha : '',
            erroMensagem : '',
            isLoading : false
        }
    }

    //Cria a funçaõ de login
    AcaoLogin = (event)=>{
        //evita o comportamento padrão do navegador de recarregar a page inteira
        event.preventDefault();

        //define que a requisiçaõ está em andamento, e retira a mensagem de erro
        this.setState({erroMensagem : '', isLoading : true})

        //passa o caminho da url da api
        axios.post('http://localhost:5000/api/login', {
            //passa as propriedades do login
            email : this.state.email,
            senha : this.state.senha
        })

        //-------------------- FAZER A CONTINUAÇÃO
        //verificação de resposta
        .then(resposta =>{
            //se ela for igual a 200
            if (resposta.status === 200) {
                //gera um token e armazena em resposta
                localStorage.setItem('token-login', resposta.data.token);

                //mostra no console do navegador o token
                console.log('Meu token: ' + resposta.data.token);
                
                //define o término da requisição
                this.setState({isLoading : false})

                //defien q a bse64 vai receber o valor do token
                let base64 = localStorage.getItem('usuario-login').split('.')[1];
                //mostra no console
                //console.log(base64);

                //converte para string 
                console.log(window.atob(base64));
                //faz a conversão de string para JSON
                console.log(JSON.parse(window.atob(base64)));

                //Exibe o tipo de usuário logado
                console.log(parseJwt().role);

                //------REDIRECIONAMENTO POR CREDENCIAL-----
                if( parseJwt().role === '1'){
                    //---------OBSERVAR FUNCIONALIDADE
                    this.props.history.push('/consultas');
                    //mostra no console que o usuário está logado
                    console.log('estou logado: ' + usuarioAutenticado());
                }

                else{
                    //-------OBSERVAR POSSÍVEL MUDANÇA  
                    this.props.history.push('/');
                }
            }
        })

        //tratativa de erro
        .catch(() =>{
            //mostra na tela para o usuário o erro
            this.setState({erroMensagem :'Email ou senha incorretos! Verifique novamente.', isLoading : false})
        })
    }

    //criando função de atualização de campo
    atualizaCampo = (campo) =>{
        this.setState({[campo.target.name] : campo.target.value})
    }

        
    render(){
        return(
            <div>
                <main>
                    <section>
                        <div>
                            <p>Bem Vindo a nossa plataforma! Faça seu login</p>
                        </div>
                        {/* Fazer a chamada para a ação de login */}
                        <form onSubmit={this.AcaoLogin}>
                            <div>
                                <input
                                    className="imput_login"
                                    //mostra que o tipo é um texto
                                    type ="text"
                                    //mostra o nome de email
                                    name="email"
                                    //atualiza o campo após a concretização
                                    value={this.atualizaCampo}
                                    //mostra no botão o nome do que é para ser inserido
                                    placeholder="username"
                                />
                            </div>

                            <div>
                                <input
                                    className="imput_password"
                                    //mostra que o tipo é uma senha
                                    type ="password"
                                    //mostra o nome de senha
                                    name="senha"
                                    //atualiza o campo após a concretização
                                    value={this.atualizaCampo}
                                    //mostra no botão o nome do que é para ser inserido
                                    placeholder="password"
                                />
                            </div>

                           
                                {/* passa uma mensagem de erro caso informações estejam erradas */}
                                <p>{this.state.erroMensagem}</p>


                            {
                                this.state.isLoading === true &&
                                <div>
                                    <button type="submit" disabled>Logando. . . </button>
                                </div>
                            }


                            {
                                this.state.isLoading === false &&
                                <div>
                                    <button type="submit" disabled
                                        disabled={this.state.email === '' || this.state. senha === '' ? 'none'  : ''}
                                    >Login </button>
                                </div>
                            }

                        </form>
                    </section>
                </main>
            </div>
        )
    };
    
};


//exportação da classe login para sua reutilização
export default Login;