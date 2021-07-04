//importação do react
import React, {Component} from 'react'; 
import axios from 'axios';
import '../../src/assets/css/login.css';
import '../../assets/css';
import '../../assets/img/logo3.png';

import {parseJwt, usuarioAutenticado}  from '../../services/auth';
//import { render } from '@testing-library/react';

//Criando a classe Login que da origem aos métodos
class Login extends Component{
    //construção das propriedades
    constructor(props){
        super(props);
        //Variável que contém as propriedades
        this.state = {
            //Passando os valores que vão ser usados para validar o login
            email : '',
            senha : '',
            errorMensagem : '',
            isLoading : false
        }
    };

    //Tratativa
    fazerLogin = (event) =>{
        //Evita o comportamento padrão do navegador (carregar a pg inteira)
        event.preventDefault();

        //Define que a requisição está em andamento
        this.setState({errorMensagem : '', isLoading : true});

        //Passa o caminho pela qual vai ser buscada as informações
        axios.post('http://localhost:5000/api/login', {
            //informações que serão usadas
            email : this.state.email,
            senha : this.state.senha
        })
        
        //Faz verificação da resposta 
        .then(resposta => {
            //Se ela for igual a 200 (sucesso)
            if (resposta.status === 200) {
                //Salva as informações (token)
                localStorage.setItem('usuario-login', resposta.data.token);
                //Mostra no console a mensagem e o token do usuário
                console.log('Meu token é:' + resposta.data.token);
                //mostra o fim da requisição
                this.setState({isLoading : false})

                //Define que a base64 vai receber as info
                let base64 = localStorage.getItem('usuario-login').split('.')[1]
                //Exibe o valor contido
                console.log(base64);
                //mostra no console o valor convertido
                console.log(window.atob(base64));
                //Mostra o valor convertido para JSON
                console.log(JSON.parse(window.atob(base64)))
                
                //Exibe o usuário logado
                console.log(parseJwt().role);

                if (parseJwt().role === '1') {
                                            //-----fazer pages
                    this.props.history.push('/Consultas');
                    console.log('estou logado: ' +usuarioAutenticado());
                } 
                //Se não for redireciona para outra page
                else{
                    this.props.history.push('/')
                }
            }
        })

        //Caso dê erro de autenticação
        .catch(() =>{
            //Passa a mensagem informando o usuário, e termina a requisição
            this.setState({errorMensagem : 'E-mail ou senha inválidos! Preencha novamente.', isLoading : this.false});
        })
    }

    //Faz a atualização do campo
    atualizaCampo = (campo) =>{
        this.setState({ [campo.target.name]  : campo.target.value})
    };
    

    render(){
        return(
            <div>
                <main>
                    <section className="container-login flex"></section>
                    {/* ARRUMAR DEPOIS */}
                    <div className="img__login"><div className="img__overlay"></div></div>
                    <div className="item__login">
                        <div className="row">
                                <div className="item">
                                    {/* tag do logo */}
                                    <img src={logo} className="icone__login" alt="" />
                                </div>
                            <div className="item" id="item__title">
                                <p className="text__login" id="item__description">Bem Vindo! Acesse já a sua conta</p>
                            </div>

                            {/* determina que é um campo onde concretiza o login */}
                            <form className="item" onSubmit={this.efetuaLogin}>
                                <div className="item">
                                    {/* Inserção do email do usuário */}
                                    <input
                                        className="input__login"
                                        //Define que o tipo é um texto
                                        type="text"
                                        // identifica pelo nome email
                                        name= "email"
                                        //Define que o valor a ser recebido é o email do usuário
                                        value={this.state.email}
                                        //Faz a atualização do campo a cada inserção do usuário
                                        onChange={this.atualizaCampo}
                                        //mostra no campo de inserção que é um email
                                        placeholder="username"
                                        //passa um identificador para o usuário logado
                                        id="login__email"
                                    />
                                </div>

                                <div className="item">
                                    {/* Inserção da senha do usuário */}
                                    <input
                                        className="input__login"
                                        //Define que o tipo é números
                                        type="password"
                                        //identifica pelo nome senha
                                        name= "senha"
                                        //Define que o valor a ser recebido é o email do usuário
                                        value={this.state.senha}
                                        //Faz a atualização do campo a cada inserção do usuário
                                        onChange={this.atualizaCampo}
                                        //escreve no campo de inserção que é uma senha
                                        placeholder="password"
                                        //passa o identificador após logar com senha
                                        id="login__password"
                                    />
                                </div>
                                {/* mostra uma mensagem de erro. Com estilização em linha */}
                                <p style={{ color : 'red'}}>{this.state.errorMensagem}</p>

                                {/* Criação do botão */}
                                {/* <button type="submit">Login</button> */}

                                { //Faz a verificação (se é true)
                                    this.state.isLoading === true &&
                                    <div className="item">
                                        {/* //desabilita o botão */}
                                        <button className="btn btn__login" id="btn__login" type="submit" disabled> Loading. . .</button>
                                    </div>
                                }

                                { //Faz a verificação (se é false)
                                    this.state.isLoading === false &&
                                    <div className="item">
                                        {/* //Declara um tipo para o botão */}
                                        <button type="submit"
                                            //identifica o botão de login
                                            className="btn btn__login" id="btn__login"
                                            //renderiza o botão de login
                                            disabled={this.state.email === '' || this.state.senha === '' ? 'none' : ''}>
                                            Login
                                        </button>
                                    </div>
                                }
                            </form>
                        </div>
                    </div>        
                </main>
            </div>
        )
    };
} 

export default Login;