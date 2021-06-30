//import { StatusBar } from 'expo-status-bar';
//import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, View } from 'react-native';
//importação da guia api
import api from './src/services/api';
import { Component } from 'react';

//Funções
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      listaUsuario : [],
    };
  }

    //criando a função de buscar usuario
    buscarUsuario = async () =>{
      //Pega os dados da api e armazena em resposta
      const resposta = await api.get('/usuario')
    }

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  
}

//Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
