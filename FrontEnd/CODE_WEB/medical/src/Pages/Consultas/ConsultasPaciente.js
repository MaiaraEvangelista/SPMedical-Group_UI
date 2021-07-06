//importação do react
import { Component } from "react";

//criação da classe consultas Paciente
class ConsultasPaciente extends Component{
    //criando um constructor com as propriedades
    constructor(props){
        //referência as propriedades
        super(props);
        this.state = {
            listarConsultas : []
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
                                                <td>{consulta}</td>
                                                <td>{consulta}</td>
                                                <td>{consulta}</td>
                                                <td>{consulta}</td>
                                                <td>{consulta}</td>
                                                <td>{consulta}</td>
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