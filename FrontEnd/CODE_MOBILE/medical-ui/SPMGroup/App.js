import { Component } from "react";
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Consultas from "./src/screens/consultas";
import Perfil from "./src/screens/perfil";

//barra de navegação da page
//link útil: https://www.npmjs.com/package/google-map-react
const bottomTab = createBottomTabNavigator();

//criação da classe APP
export default class App extends Component{
  render(){
    return(
      <View style={styles.main}>
        <NavigationContainer>
          {/* Faz o "menu" de navegação */}
          <bottomTab.Navigator
            initialRouteName = 'Consultas'//define a rota inicial
            tabBarOptions={{
              showLabel: true,
              showIcon : false, //sobre os componentes no menu de navegação do footer
              activeBackgroundColor: '#0A7076',//ativa a cor de fundo da seção que o usuário estiver
              inactiveBackgroundColor: '#rgba(10, 112, 118, 1)',//adiciona uma cor de fundo ao menu do footerr
              activeTintColor: 'pink',//deixa as letras da seçaõ em q o usuário está rosa
              inactiveTintColor : 'black'//deixa as outras letras de onde o usuário n está em preto
            }}

            screenOptions = {({route}) => ({
              tabBarIcon
            })}
          >
            <bottomTab.Screen name='Consultas' component={Consultas}/>
            <bottomTab.Screen name='Perfil' component={Perfil}/>
          </bottomTab.Navigator>
        </NavigationContainer>
        <Text>Bem Vindo a Home</Text>
      </View>
    );
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