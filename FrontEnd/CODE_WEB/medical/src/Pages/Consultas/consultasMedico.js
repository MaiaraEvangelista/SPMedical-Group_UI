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
            alterarConsulta : ''
        }
    }

    buscarConsultas = () =>{
        fetch('http://localhost:5000/api/consultasmedico', {
            headers :{
                'Authorization' : 'Bearer' + localStorage.getItem('usuario-login')
            }
        })

        .then(resposta =>{
            if (resposta !== 200) {
                throw Error();
            }
            return resposta.json();
        })
    }


    //inicia uma função
    componentDidMount(){
        this.buscarConsultas();
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
                        </table>
                    </section>
                </main>
            </div>
        )
    }
}

//faz a exportação da classe para reutilização
export default ConsultasMedico;