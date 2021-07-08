import React, {Component} from 'react';
import { FlatList, Image, StyleSheet, Text, View} from 'react-native';

//fazendo importação da API 
import api from './SPMGroup/src/services/api';

//criando a classe consultas
export default class Consultas extends Component{
    constructor(props){
        super(props);
        this.state ={
            listaConsultas : [],
            //idConsulta : 0,
            //dataConsulta : new Date(),
            //descricao : '',
            //situacao : '',
            //nomeMedico : ''
            //nomePaciente : ''
            //isLoading : false
        }
    }

    //criando a função de busca
    //async/await faz com que as requisições sejam feitas uma por vez
    buscarConsultas =  async () =>{
        //criando uma constante para armazenar os dados. E passando o caminho da onde vai ser pego os dados
        const resposta = await api.get('/consultas');
        //pega os dados e armazena em dadosApi
        const dadosApi = resposta.data;
        this.setState({listaConsultas : dadosApi});
    };

    fazerVisualização = () =>{
        
    }

    //Inicia as funções criadas
    componentDidMount(){
        //faz a realização da função
        this.buscarConsultas();
    };


    render(){
        return(
            <View style={styles.main}>
                {/* Cabeçalho */}
                <View style={styles.headerMain}> {/* Parte superior do corpo */}
                    <View style={styles.mainHeaderRow}> {/* Para posicionar o logo com a palavra */}
                         {/* Componente de iamgem */}
                        <Image
                            source={require('./SPMGroup/assets/img/logo3.png')}
                            style={styles.mainHeaderImg}
                        />
                        <Text style={styles.mainHeaderText}>{"Consultas".toUpperCase()}</Text> {/* texto principal. toUpperCase para dar efeito visual de texto maior */}
                    </View>
                </View>

                {/* CORPO */}
                <View style={styles.mainBody}>
                    {/* Componente de listagem */}
                    <FlatList
                        contentContainerStyle={styles.mainBodyC}
                        data={this.state.listaConsultas} /*passa o "caminho" de onde vai ser pego as informações */
                        keyExtractor={item => item.situacao}/*VERIFICAR POSSÍVEL MUDANÇA*/
                        renderItem={this.render.item}
                    />

                 
                </View>
            </View>
        )
    };

    //criando a função de renderização (renderiza os itens da lista, um outro "return")
    renderItem = ({item}) =>(
        // <Text>{item.situacao}</Text>
        <View style={styles.flatItemRow}>
            <View style={styles.flatItemC}>
                <Text style={styles.dlatItemTitle}>{item.dataConsulta}</Text>
                <Text style={styles.flatItemInfo}>{item.nomePaciente}</Text>
                <Text style={styles.flatItemInfo}>{item.situacao}</Text>
                <Text style={styles.flatItemInfo}>{item.nomeMedico}</Text>
                <Text style={styles.flatItemInfo}>{item.horarioConsulta}</Text>
                <Text style={styles.flatItemInfo}>{item.descricao}</Text>
            </View>

            <View>
                <Pressable
                    style={styles.botaoVisu}
                    onPress={this.fazerVisualização}
                >
                    
                    <Text>Visualizar</Text>
                    
                </Pressable>
            </View>
        </View>
    )
}

//estilização
const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor: '#FFFBFC',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerMain :{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    mainHeaderRow:{
        flexDirection:'row'
    },

    mainHeaderText:{
        fontSize: 20,
        letterSpacing:4,
        color:'#F1F1F1'
    },

    mainHeaderImg:{
        width: 20,
        height: 20,
        //marginRight: 8
        //marginTop: 10
    }
    
})