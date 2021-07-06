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
            idConsulta : '',
            situacao : '',
            idSituacaoAlterada : 0
        }
    }

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

    cadastrarConsulta = (event) =>{
        event.preventDefault();

        if (this.state.idConsulta !== 0) {
            fetch('http://localhost:5000/api/consultas/' + this.state.idConsulta, 
            {
                method: 'PUT',
                body : JSON.stringify({
                    situacaoConsulta : this.state.idSituacaoAlterada
                }),

                headers :{
                    "Content-Type" : "application/json",
                    'Authorization' : 'Bearer' + localStorage.getItem('usuario-login')
                }
            })

            .then(resposta =>{
                if (resposta === 204) {
                    console.log(
                        'Consulta' + this.state.idSituacaoAlterada + 'atualizada',
                        'A nova situação é :' +this.state.situacao 
                    );
                };
            })

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

    //inicia uma função
    componentDidMount(){
        this.buscarConsultas();
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
                                    
                                </tr>
                            </thead>
                        </table>
                    </section>
                </main>
            </div>
        )
    }
}

//faz a exportação da classe para reutilização
export default Consultas;