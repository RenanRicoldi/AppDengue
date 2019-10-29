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

import { images, colors } from '../../utils/consts'

import Styles from './Styles'

const def_pageStatus = {
    WELCOME: 0,
    LOGIN: 1,
    NEWUSER: 2
}

function loading(){
    return(
        <View style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.4)'}}>
            <ActivityIndicator color={colors.def_yellow} size='large'/>
        </View>
    )
}

function button(title, action){

   // console.log(action)

    return(
        <TouchableOpacity onPress={() => action()} activeOpacity={0.8} style={ Styles.btnContainer }>
            <Text style={ Styles.btnText }>{title}</Text>
        </TouchableOpacity>
    )
}

async function storeKey(token){

    try {
      await AsyncStorage.setItem('tokenID', JSON.stringify(token))
    } catch (error) {
      console.log(error)
    }

}

function getToken(username, password, isLogin, navigate, changeLoading){

    changeLoading(true)

    let URL = ''

    let data = {}

    if(isLogin == def_pageStatus.LOGIN){

        URL = 'http://hqaedesuel.herokuapp.com/auth/login/'

        data = {
            username: username,
            password: password
        }

    }else if(isLogin == def_pageStatus.NEWUSER){

        URL = 'http://hqaedesuel.herokuapp.com/auth/registration/'

        data = {
            username: username,
            password1: password,
            password2: password
        }

    }else{
        Alert.alert('Erro desconhecido', '????????')
        return
    }

    axios.post(URL, data).then((response) =>{
        console.log(response)
        storeKey(response.data.key)
        hangeLoading(false)
        navigate('Início')
    }).catch((error) => {
        Alert.alert('Não foi possível realizar seu login', 'Verifique os dados informados e tente novamente')
        changeLoading(false)
        console.log(error)
    })

}

/* Registration screen */

function registerScreen(register, changeScreen){

    let inputUsername, mainPassword, auxPassword = ''
    let isModalVisible = false

    const changeUsername = (aux) => {
        inputUsername = aux
    }

    const changeMainPassword = (aux) => {
        mainPassword = aux
    }

    const changeAuxPassword = (aux) => {
        auxPassword = aux
    }

    const formVerification = () => {

        if(inputUsername === '' || mainPassword === '' || auxPassword === ''){
            Alert.alert('Cadastro incompleto', 'Preencha todos os campos do cadastro e tente novamente')
            return
        }

        if(mainPassword === auxPassword){
            isModalVisible = true
            register(inputUsername, mainPassword)
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
                        placeholder='usuário'
                        onChangeText={text => changeUsername(text)}/>
                    <TextInput
                        style = { Styles.textInput }
                        placeholder='senha'
                        secureTextEntry={true}
                        onChangeText={text => changeMainPassword(text)}/>
                    <TextInput
                        style = { Styles.textInput }
                        placeholder='confirme a senha'
                        secureTextEntry={true}
                        onChangeText={text => changeAuxPassword(text)}/>
                    {button('cadastrar', formVerification)}
                    {button('voltar', changeScreenCallback)}
            </View>   

        </View>
        </ImageBackground>

    )

}

/* Login screen */

function loginScreen(login, changeScreen, isLoading){

    let inputUsername, mainPassword = ''

    const changeUsername = (aux) => {
        inputUsername = aux
    }

    const changeMainPassword = (aux) => {
        mainPassword = aux
    }

    const formVerification = () => {

        if(inputUsername === '' || mainPassword === ''){
            Alert.alert('Cadastro incompleto', 'Preencha todos os campos do cadastro e tente novamente')
            return
        }else{
            login(inputUsername, mainPassword)
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
                        onChangeText={text => changeUsername(text)}/>
                    <TextInput
                        style = { Styles.textInput }
                        placeholder='senha'
                        secureTextEntry={true}
                        onChangeText={text => changeMainPassword(text)}/>
                    {button('entrar', formVerification)}
                    {button('voltar', changeScreenCallback)}
            </View>
        </View>
        </ImageBackground>
    )
}

/* Welcome screen */

function welcomeScreen(changeScreen, navigate){

    const changeScreenCallback = (page) => {
        changeScreen(page)
    }

    const noUserWarning = () => {

        Alert.alert('Tem certeza que deseja entrar sem fazer cadastro?',
        'Os dados dos seus questionários não ficarão salvos caso você escolha essa opção',
        [
          {text: 'Voltar'},
          {text: 'Tenho certeza', onPress: () => {storeKey('noUser')
                                                    navigate('Início')}
            },
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

    const aux_getToken = (username, password) => {
        getToken(username, password, pageStatus, navigate, changeLoading)
    }

    console.log(pageStatus)
    if(pageStatus == def_pageStatus.WELCOME){
        console.log("OOIOI")
        return(
            welcomeScreen(changePageStatus, navigate)
        )
    }else if(pageStatus == def_pageStatus.LOGIN){
        return(
            loginScreen(aux_getToken, changePageStatus, isLoading)
        )
    }else if(pageStatus == def_pageStatus.NEWUSER){
        return(
            registerScreen(aux_getToken, changePageStatus, isLoading)
        )
    }

}

export default Login