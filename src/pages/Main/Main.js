import React from 'react'
import {Text,   
        View,
        Image,
        StatusBar, 
        BackHandler,
        Alert } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import { colors,icon1X, appSituation } from '../../utils/consts'
import MainButton from '../../components/MainButton/MainButton'
import backhandler from '../../utils/backhandler'
import Styles from './Styles'

async function setUserToLoggedOut(){

    try {
      await AsyncStorage.setItem('appSituation', JSON.stringify(appSituation.LOGGED_OUT))
    } catch (error) {
      console.log(error)
    }

}

class Main extends React.Component {

    state = {
        appSituation: undefined
    }

    componentDidMount(){

        setTimeout(()=>{
            this.retrieveToken()
        }, 500)

    }

    retrieveToken = async () => {

        try {
            var value = await AsyncStorage.getItem('appSituation');
         if (value !== null) {
            console.log(JSON.parse(value), "from internal mains")
            this.setState({
                appSituation: JSON.parse(value)
            })
         }
        } catch (error) {
            console.log(error)
        }
    }

    changeView = (viewName) => {

        console.log(this.state.appSituation, 'inside change')

        if(viewName === 'Login'){
            Alert.alert('Tem certeza que deseja sair?', 'Você será deslogado e enviado para a tela de login', [
                {text: 'Voltar'},
                {text: 'Sair', onPress: () => {
                    setUserToLoggedOut()
                    this.props.navigation.navigate(viewName, this.props.navigation.navigate)
                }}
            ])
        }else if(viewName === 'Historico' && this.state.appSituation == appSituation.LOGGED_NO_USER){
            Alert.alert('Histórico de respostas indisponível', 'Você entrou sem fazer login. Para visualizar seu histórico salvo, saia e faça login.', [
                {text: 'Fazer login', onPress: () => {
                    setUserToLoggedOut()
                    this.props.navigation.navigate('Login', this.props.navigation.navigate)}},
                {text: 'Ok'}
            ])
        }else{
            this.props.navigation.navigate(viewName, this.props.navigation.navigate)
        }

        
    }

    render(){
        return(
            <>
                <StatusBar barStyle='dark-content' backgroundColor={colors.def_yellow}/>
                
                <View style={ Styles.background }>
                <View style={ Styles.headerWrapper }>
                    <View>
                        <View style={ Styles.rec1 }/>
                        <View style={ Styles.rec2 }/>
                        
                    </View>
                    <Image source={icon1X.def_iconDengue} style={ Styles.logoWrapper } resizeMode='contain'/>
                </View>
                    <MainButton color={colors.def_yellow} corner ={'Top'} title={'checklist'} changeView={this.changeView} viewName='Checklist'/>
                    <MainButton color={colors.def_yellow} title={'histórico de respostas'} changeView={this.changeView} viewName='Historico'/>
                    <MainButton color={colors.def_yellow} title={'denúncia'} changeView={this.changeView} viewName='Denuncia'/>
                    <MainButton color={colors.def_yellow} title={'doenças'} changeView={this.changeView} viewName='Doencas'/>
                    <MainButton color={colors.def_yellow} title={'sobre o projeto'} changeView={this.changeView} viewName='Sobre'/>
                    <MainButton color={colors.def_yellow} corner ={'Bottom'} title={'sair'} changeView={this.changeView} viewName='Login'/>
                </View>
            </>
        )
    }
}

export default Main
