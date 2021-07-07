//import { StatusBar } from 'expo-status-bar';
//import React, {Component} from 'react';
//import {FlatList, Image, StyleSheet, Text, View } from 'react-native';
//importação da guia api
//import api from './src/services/api';
//importação do react e da classe criada 
//import React, { Component } from 'react';

//Funções (Componente de classe)
// export default class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
      //propriedades
  //     listaConsultas : [],
  //   };
  // }

  //criando a função de buscar consultas
  //buscarconsultas = async () =>{
    //pega os dados da api e armazena em resposta
    //const resposta = await api.get('/consultas');

    //Atribuindo os valores das respostas recebidas ao data 
    //const dadosApi = resposta.data;

    //Depois de receber as respostas armazena na lista
    //this.setState({listaConsultas : dadosApi});
  //};

  //Inicia uma função criada
  //componentDidMount(){
   // this.buscarconsultas();//(L20)
  //}

  // render(){
  //   return(
      //Parte de renderização na tela
      //<View style={styles.container}>
        {/* Renderização de texto na tela */}
        {/* <Text>{'Consultas'.toUpperCase()}</Text> */}

        // <View>
        //   <FlatList
           // contentContainerStyle={styles.mainBodyConteudo}
        //     data={this.state.listaConsultas}
        //     keyExtractor = {(item) => item.situacaoConsulta}
        //     renderItem={this.renderizaItem}
        //   />
        // </View>

          {/* Cabeçalho */}
        // <View style={styles.containerHeader}>
        //   <View style={styles.containerTop}>
        //     <View style={styles.containerHeaderRow}>
              {/* Componente de imagem */}
             // <Image
              //Url do caminho da imagem
                //source={require('./assets/img/logo3.png')}
                //Feito para estilização 
                //style={styles.containerHeaderImg}
              ///>
             // <Text style={styles.containerHeaderText}> {"Consultas".toUpperCase()}</Text>
        //     </View>
        //   </View>
        // </View>

        {/* Corpo 
           style={styles.containerBody}ESTAVA DENTRO DA PRIMEIRA VIEW */}
        // <View >
        //   <FlatList
          //USAR A ESTILIZAÇÃO QUANDO APARECER A LISTAGEM
        //   contentContainerStyle={styles.containerBodyContent}
        //   data={this.state.listaConsultas }
        //   keyExtractor={item => item.nomePaciente}
        //   renderItem={this.renderItem}
        //   />
        // </View>

        // <View style={styles.containerHeader}>
        //   <View style={styles.containerFooter}>
          {/* ACRESCENTAR MAIS COISAS */}
  //         </View>

  //       </View>
  //     </View>
  //   );
  // }

  // renderItem= ({item}) => (
  //   <Text style={{fontSize: 30, color: 'blue'}}>{item.nomePaciente}</Text>
  // )

  //Cria a função de renderizar o conteúdo na tela
//   renderItem = ({item}) =>{
//     <View style={styles.flatItem}>
//       <View style={flatItemConatiner}>
//         <Text style={styles.flatItemTitle}>{item.situacaoConsulta}</Text>
//         <Text style={styles.flatItemNews}>{item.descricao}</Text>
//         <Text style={styles.flatItemNews}>{item.nomePaciente}</Text>
//       </View>
//     </View>
//   };
  
// }

//Estilização
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFBFC",
    //backgroundColor: '#0A7076',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // containerHeader:{
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center'
    // backgroundColor: 
    // width: 900,
    // height: 100
 // },

 // containerHeaderRow:{
  //  flexDirection: 'row',

  //},

  // containerTop:{
  //   backgroundColor: '#0A7076',
  //   width: 998,
  //   height: 90,
  //   marginBottom: 850 //VISUALIZAR A TROCA DE MÉTODO
  // },

//   containerFooter:{
//     backgroundColor: '#0A7076',
//     width: 998,
//     height:90
//   },

//   containerHeaderImg:{
//     width:230,
//     height:40,
//     marginLeft: 140,
//     marginTop:'1.3em'
//   },

//   containerHeaderText:{
//     marginLeft: '7em',
//     marginTop:'0.7em',
//     color: "pink",
//     fontSize: 30,
//     letterSpacing: 2,
//     //fontFamily: 'Open Sans'
//    // borderColor: "black"
//    // textTransform: 'uppercase'
//   },

//   // containerBody:{
//   //   flex: 3,
//   //   backgroundColor: 'red'
//   // },

//   renderItem: {
//     width: 80,
//     height: 60,
//     fontSize: 40,
//     color: 'red'
//   },

 


// });
