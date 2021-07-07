import {Component} from 'react';
import { AsyncStorage, TouchableOpacity } from 'react-native';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

//---------VERIFICAR A RETIRADA--------------
export default function Stack(){
    return(
        <NavigationContainer>
            <AuthStack.Navigator>
                <AuthStack.Screen name = 'Login' component={Login}/>
                <AuthStack.Screen name = 'Main' component/>
            </AuthStack.Navigator>
        </NavigationContainer>
    )
}

//criando a classe login
export default class Login extends Component{
    //iniciando o props
    constructor(props){
        //instânciando o props
        super(props);
        //passando os "valores"
        this.state = {
            email :'',
            senha : ''
        }
    }

    //criando a função de fazer login
    fazerLogin = async () =>{
        console.warn(this.state.email + '' + this.state.senha);
    
        //tratativa
        try {
            const resposta = await api.post('/login', {
                email : this.state.email,
                senha : this.state.senha,
            });

            //armazena as informações do token
            const token = resposta.data.token;
            //mostra no console
            console.warn(token);


            await AsyncStorage.setItem('userToken', token);
            this.props.navigation.navigate('Main');
        } 
        //caso dê erro
        catch (error) {
            //mostra no console
            console.warn(error)
        }
    
    };

    render(){
        return(
            //<View style={styles.overlay}/>
            <View style={styles.main}>

                <Image
                    source={require('../../assets/img/logo3.png')}
                    style={styles.imgLogin}
                />

                <TextInput
                    style={styles.loginInput}
                    placeholder="username"
                    placeholderTextColor="#fff"
                    keyboardType='email-address'
                    onChangeText={email => this.setState({email})}
                />

                <TextInput
                    style={styles.loginInput}
                    placeholder="password"
                    placeholderTextColor="#fff"
                    secureTextEntry={true}
                    onChangeText={senha => this.setState({senha})}
                />

                <TouchableOpacity>
                    <Text style={styles.botaoLogin}>Login</Text>
                </TouchableOpacity>
            </View>
           
        );
    }
}

//estilização
const styles = StyleSheet.create({
    main : {
        window: '100%',
        height: '100%',
        alignItems: 'center'
    }
})