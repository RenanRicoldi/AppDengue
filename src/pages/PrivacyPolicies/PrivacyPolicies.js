import React from 'react'
import { View,
         Text, 
         Image, 
         StatusBar,
         ScrollView,
         TouchableOpacity,
         PermissionsAndroid, 
         Alert} from 'react-native'
import {icon1X, termo, colors} from '../../utils/consts'

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage'

import Main from '../Main/Main'
import Doencas from '../Doencas/Doencas'
import Checklist from '../Checklist/Checklist'
import Denuncia from '../Denuncia/Denuncia'
import Mapa from '../Mapa/Mapa'
import Historico from '../Historico/Historico'
import Sobre from '../Sobre/Sobre'
import Login from '../Login/Login'
import HistoricoIndividual from '../HistoricoIndividual/HistoricoIndividual'

import Styles from './Styles'
import { appSituation } from '../../utils/consts'

async function setPrivacyToAgreed(){

    try {
      await AsyncStorage.setItem('appSituation', JSON.stringify(appSituation.PRIVACYOK))
    } catch (error) {
      console.log(error)
    }

}

async function requestLocation( grantPermission ) {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Localização',
          message:
            'Permitir acesso a localização do seu celular',
          buttonNegative: 'Negar',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return new Promise(resolve => resolve(true))
      } else {
        Alert.alert('Acesso negado', 'Você precisa liberar o acesso a localização para utilizar o app')
        return new Promise(resolve => resolve(false))
      }
    } catch (err) {
      console.warn(err);
      Alert.alert('Algo deu errado', 'Tente novamente')
    }
  }

class Privacy extends React.Component{

    state = {
        appSituation: appSituation.LOADING_DATA
    }

    

    componentDidMount(){

        setTimeout(() =>{
            console.log('oi')
            this.retrieveToken()
        }, 1500)

    }

    retrieveToken = async () => {

        try {
            var value = await AsyncStorage.getItem('appSituation');
         if (value !== null) {
            console.log(JSON.parse(value), "from internal")
            this.setState({
                appSituation: JSON.parse(value)
            })
         }else{
             this.setState({
                 appSituation: appSituation.WAITING_PRIVACY_AGREEMENT
             })
         }
        } catch (error) {
            console.log(error)
        }
    }

    render(){

        if(this.state.appSituation == appSituation.LOADING_DATA){
            return(
                <View style={ Styles.waitingScreen }>
                    <StatusBar barStyle='dark-content' backgroundColor={colors.def_yellow}/>
                    <Image source={icon1X.def_iconDengue} style={{width: '70%'}} resizeMode='contain'/>
                </View>
            )
        }else if(this.state.appSituation == appSituation.WAITING_PRIVACY_AGREEMENT){
            return(
                <>
                    <StatusBar barStyle='dark-content' backgroundColor='#fff'/>
                   
                    <View style={ Styles.background }>  
                     
                        <View style={ Styles.terms }>
                            <ScrollView style={Styles.scroll}>
                                <Text style={Styles.termText}>{termo}</Text>
                            </ScrollView>
                            <View style={Styles.header}>
                                <Image source={icon1X.def_iconMosquito } style={Styles.imageHeader}/>                 
                                <Text style={ Styles.title }>Politica de Privacidade</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={ () => {
                                                    requestLocation().then((granted) => {
                                                        if(granted){
                                                            setPrivacyToAgreed()
                                                            this.props.navigation.navigate('Login', this.props.navigation.navigate)
                                                        }
                                                    })}}
                                          style={Styles.button}>
                                <Text style={Styles.buttonText}>concordo</Text>
                        </TouchableOpacity>
                        
                    </View>
                </>
            )
        }else if(this.state.appSituation == appSituation.LOGGED_IN){
            {this.props.navigation.navigate('Início')}
            return null
        }else{
            {this.props.navigation.navigate('Login', this.props.navigation.navigate)}
            return null
        }
    }
}

const stackNavigator = createStackNavigator({
    Login:{
        screen: Login
    },
    Início: {
        screen: Main
    },
    'Política de Privacidade': {
        screen: Privacy
    },
    Doencas: {
        screen: Doencas
    },
     Sobre: {
         screen: Sobre
     },
    Checklist: {
        screen: Checklist
    },
    Denuncia: {
        screen: Denuncia
    },
    Mapa:{
        screen: Mapa
    },
    Historico:{
        screen:Historico
    },
    Login:{
        screen: Login
    },
    HistoricoIndividual:{
        screen: HistoricoIndividual
    }
  },
  {
    initialRouteName: 'Política de Privacidade',
    headerMode: 'none'
  })
  
  const App = createAppContainer(stackNavigator);

export default App