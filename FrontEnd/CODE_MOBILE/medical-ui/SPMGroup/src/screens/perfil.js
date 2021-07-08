import { Component } from "react";
import { FlatList, Image, StyleSheet, Text, View} from 'react-native';


export default class Perfil extends Component{
  render(){
    return(
      <View style={styles.main}>
        <Text>Bem Vindo ao Perfil</Text>
      </View>
    )
  }
}

//estilização
const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: '#FFFBFC',
    alignItems: 'center',
    justifyContent: 'center'
  },

});