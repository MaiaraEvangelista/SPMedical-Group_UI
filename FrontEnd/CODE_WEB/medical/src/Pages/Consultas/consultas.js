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
        }
    }


    //inicia uma função
    componentDidMount(){

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