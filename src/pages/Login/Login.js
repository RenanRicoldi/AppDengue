import React, { useState } from 'react'
import {View,
        Text,
        TouchableOpacity,
        TextInput,
        ImageBackground,
        Alert,
        StatusBar,
        ActivityIndicator} from 'react-native'

import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import Modal from 'react-native-modal'

import backhandler from '../../utils/backhandler'
import { images, colors, appSituation } from '../../utils/consts'

import Styles from './Styles'

const def_pageStatus = {
    WELCOME: 0,
    LOGIN: 1,
    NEWUSER: 2
}

function button(title, action){

    return(
        <TouchableOpacity onPress={() => action()} activeOpacity={0.8} style={ Styles.btnContainer }>
            <Text style={ Styles.btnText }>{title}</Text>
        </TouchableOpacity>
    )
}

async function storeKey(token, userStatus){

    try {
      await AsyncStorage.setItem('tokenID', JSON.stringify(token))
      await AsyncStorage.setItem('appSituation', JSON.stringify(userStatus))

      console.log(userStatus, 'salvando chave')
    } catch (error) {
      console.log(error)
    }

}

function getToken(username, password, isLogin, navigate, changeLoading, userStatus){

    changeLoading(true)

    let URL = ''

    let data = {}

    console.log(isLogin, 'isLogin')

    if(isLogin == def_pageStatus.LOGIN || isLogin == def_pageStatus.WELCOME){

        URL = 'https://hqaedesuel.herokuapp.com/auth/login/'

        data = {
            username: username,
            password: password
        }

    }else if(isLogin == def_pageStatus.NEWUSER){

        URL = 'https://hqaedesuel.herokuapp.com/auth/registration/'

        data = {
            username: username,
            password1: password,
            password2: password
        }

    }else{
        Alert.alert('Erro desconhecido', '????????')
        return
    }

    console.log(URL)

    axios.post(URL, data).then((response) =>{
        console.log(response)
        storeKey(response.data.key, userStatus)
        changeLoading(false)
        navigate('Início')
    }).catch((error) => {
        if(isLogin){
            Alert.alert('Não foi possível realizar seu login', 'Verifique os dados informados e tente novamente')
        }else{
            Alert.alert('Não foi possível realizar seu cadastro', 'Verifique os dados informados e tente novamente')
        }
        changeLoading(false)
        console.log(error.response) 
    })

}

/* Registration screen */

function RegisterScreen({register, changeScreen}){

    const [inputUsername, changeUsername] = useState('')
    const [mainPassword, changeMainPassword] = useState('')
    const [auxPassword, changeAuxPassword] = useState('')
    
    let isModalVisible = false

    const formVerification = () => {

        if(inputUsername === '' || mainPassword === '' || auxPassword === ''){
            Alert.alert('Cadastro incompleto', 'Preencha todos os campos do cadastro e tente novamente')
            return
        }

        if(mainPassword === auxPassword){
            isModalVisible = true
            register(inputUsername, mainPassword, appSituation.LOGGED_IN)
            changeUsername('')
            changeMainPassword('')
            changeAuxPassword('')
        }else{
            Alert.alert('As senhas não combinam', 'Verifique sua senha e tente novamente')
        }
    }

    const changeScreenCallback = () => {
        changeScreen(def_pageStatus.WELCOME)
    }

    return(
        <ImageBackground source={images.background} style={{height: '100%'}}>

        <StatusBar backgroundColor={colors.def_yellow} barStyle='dark-content' />
        <Modal isVisible={isModalVisible}>
            <ActivityIndicator color={colors.def_yellow} size='large'/>
        </Modal>

        <View style={ Styles.mainContainer }>

            <View style={ Styles.mainArea }>

                <View style={ Styles.header }>
                    <Text style={ Styles.title }>cadastro</Text>
                </View> 

                <Text style={ Styles.subtitle }>Preencha os dados abaixo para realizar seu cadastro</Text>
                    <TextInput
                        style = { Styles.textInput }
                        value = {inputUsername}
                        placeholder='usuário'
                        onChangeText={text => changeUsername(text)}/>
                    <TextInput
                        style = { Styles.textInput }
                        placeholder='senha'
                        value = {mainPassword}
                        secureTextEntry={true}
                        onChangeText={text => changeMainPassword(text)}/>
                    <TextInput
                        style = { Styles.textInput }
                        placeholder='confirme a senha'
                        secureTextEntry={true}
                        value={auxPassword}
                        onChangeText={text => changeAuxPassword(text)}/>
                    {button('cadastrar', formVerification)}
                    {button('voltar', changeScreenCallback)}
            </View>   

        </View>
        </ImageBackground>

    )

}

/* Login screen */

function LoginScreen({login, changeScreen, isLoading}){

   const [inputUsername, changeUsername] = useState('')
   const [mainPassword, changePassword] = useState('')

    const formVerification = () => {

        if(inputUsername === '' || mainPassword === ''){
            Alert.alert('Cadastro incompleto', 'Preencha todos os campos do cadastro e tente novamente')
            return
        }else{
            login(inputUsername, mainPassword, appSituation.LOGGED_IN)
            changeUsername('')
            changePassword('')
        }

    }

    const changeScreenCallback = () => {
        changeScreen(def_pageStatus.WELCOME)
    }

    return(
        <ImageBackground source={images.background} style={{height: '100%'}}>

        <StatusBar backgroundColor={colors.def_yellow} barStyle='dark-content' />
        <Modal isVisible={isLoading}>
            <ActivityIndicator color={colors.def_yellow} size='large'/>
        </Modal>

        <View style={ Styles.mainContainer }>

            <View style={ Styles.mainArea }>
                <View style={ Styles.header }>
                    <Text style={ Styles.title }>login</Text>
                </View>    

                <Text style={ Styles.subtitle }>Insira seus dados de login</Text>
                    <TextInput
                        style = { Styles.textInput }
                        placeholder='usuário'
                        value={inputUsername}
                       onChangeText={(text) => changeUsername(text)}/>
                    <TextInput
                        style = { Styles.textInput }
                        value = {mainPassword}
                        placeholder='senha'
                        secureTextEntry={true}
                        onChangeText={(text) => changePassword(text)}/>
                    {button('entrar', formVerification)}
                    {button('voltar', changeScreenCallback)}
            </View>
        </View>
        </ImageBackground>
    )
}

/* Welcome screen */

function WelcomeScreen({changeScreen, register}){

    const changeScreenCallback = (page) => {
        changeScreen(page)
    }

    const noUserWarning = () => {


        Alert.alert('Tem certeza que deseja entrar sem fazer cadastro?',
        'Os dados dos seus questionários não ficarão salvos caso você escolha essa opção',
        [
          {text: 'Voltar'},
          {text: 'Tenho certeza', onPress: () => register('default', 'hqaedesuel', appSituation.LOGGED_NO_USER)}
        ])

    }

    return(

        <ImageBackground source={images.background} style={{height: '100%'}}>
        <StatusBar backgroundColor={colors.def_yellow} barStyle='dark-content' />
        <View style={ Styles.mainContainer }>
            
            <View style={ Styles.mainArea }>
                <View style={ Styles.header }>
                    <Text style={ Styles.title }>bem-vindo(a)!</Text>
                </View>    

                <Text style={ Styles.subtitle }>Faça login ou para cadastre-se utilizar o app</Text>
                {button('login', () => changeScreenCallback(def_pageStatus.LOGIN))}
                {button('cadastrar', () => changeScreenCallback(def_pageStatus.NEWUSER))}
                
                <TouchableOpacity activeOpacity={0.8} onPress={() => noUserWarning()}>
                    <Text style={ Styles.btnTextAlternative }>entrar sem fazer cadastro</Text>
                </TouchableOpacity>
            </View>   

        </View>
        </ImageBackground>

    )

}

/* Main screen */

function Login(props){

    const [pageStatus, changePageStatus] = useState(def_pageStatus.WELCOME)
    const [isLoading, changeLoading] = useState(false)

    const navigate = props.navigation.navigate

    backhandler(() => { changePageStatus(def_pageStatus.WELCOME) },
                () => { props.navigation.navigate('Login')},
                pageStatus)

    const aux_getToken = (username, password, userStatus) => {
        getToken(username, password, pageStatus, navigate, changeLoading, userStatus)
    }

    console.log(pageStatus)
    if(pageStatus == def_pageStatus.LOGIN){
        return(
            <LoginScreen login={aux_getToken} changeScreen={changePageStatus} isLoading={isLoading}/>
        )
    }else if(pageStatus == def_pageStatus.NEWUSER){
        return(
            <RegisterScreen register={aux_getToken} changeScreen={changePageStatus}/>
        )
    }else {
        return(
            <WelcomeScreen changeScreen={changePageStatus} register={aux_getToken}/>
        )
    }

}

export default Login