//importação do react
import React, {Component} from 'react'; 
import axios from 'axios';
import {parseJwt, usuarioAutenticado}  from '../'
import { render } from '@testing-library/react';



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

        //Define que a rquisiçaõ está em andamento
        this.setState({errorMensagem : '', isLoading : true});

        //Passa o caminho pela qual vai ser buscada as informações
        axios.post('http://localhost:5000/api/login', {
            //informaçõeds que serão usadas
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
                                            //-----fazer page
                    this.props.history.push('/Consultas');
                    //console.log()
                } 
                //Se não for redireciona para outra page
                else{
                    this.props.history.push('/')
                }
            }
        })

        //Caso dê erro de autenticação
        .catch(() =>{
            //Passa a mensagem informando o usuário
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
                    <section className=""></section>
                    <p>Bem Vindo! Acesse já a sua conta</p>
                    <form onSubmit={this.efetuaLogin}>
                        {/* Inserção do email do usuário */}
                        <input
                            //Define que o tipo é um texto
                            type="text"
                            name= "email"
                            //Define que o valor a ser recebido é o email do usuário
                            value={this.state.email}
                            //Faz a atualização do campo a cada inserção do usuário
                            onChange={this.atualizaCampo}
                            placeholder="username"
                        />

                        {/* Inserção da senha do usuário */}
                        <input
                            //Define que o tipo é um texto
                            type="password"
                            name= "senha"
                            //Define que o valor a ser recebido é o email do usuário
                            value={this.state.senha}
                            //Faz a atualização do campo a cada inserção do usuário
                            onChange={this.atualizaCampo}
                            placeholder="password"
                        />

                        {/* Criação do botão */}
                        <button type="submit">Login</button>
                    </form>
                </main>
            </div>
        )
    };


} 

export default Login;