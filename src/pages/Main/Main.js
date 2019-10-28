import React from 'react'
import { 
        Text,   
        View,
        Image,
        StatusBar, 
        TouchableOpacity } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import { colors,icon1X } from '../../utils/consts'
import MainButton from '../../components/MainButton/MainButton'
import Styles from './Styles'

import Privacy from '../PrivacyPolicies/PrivacyPolicies'
import Doencas from '../Doencas/Doencas'
import Sobre from '../Sobre/Sobre'

class Main extends React.Component {
    render(){
        return(
            <>
                <StatusBar barStyle='dark-content' backgroundColor={colors.def_white}/>
                
                <View style={ Styles.background }>
                    <View style={Styles.header}>
                        <View style={Styles.box}></View>
                        <Image style={Styles.imagem} source={icon1X.def_iconDengue}/>
                    </View>
                    
                    <MainButton color={colors.def_yellow} corner ={'Top'}title={'Checklist'}/>
                    <MainButton color={colors.def_yellow} title={'Historico de Respostas'}/>
                    <MainButton color={colors.def_yellow} title={'Mapa'}/>
                    <MainButton color={colors.def_yellow} title={'Denuncia'}/>
                    <MainButton color={colors.def_yellow} title={'Doenças'}/>
                    <MainButton color={colors.def_yellow} corner ={'Bottom'} title={'Sobre o Projeto'}/>
                </View>
            </>
        )
    }
}

const stackNavigator = createStackNavigator({
    Início: {
        screen: Main
    },
    'Política de Privacidade': {
        screen: Privacy
    },
    Doenças: {
        screen: Doencas
    },
    Sobre: {
        screen: Sobre
    },
  },
  {
    initialRouteName: 'Início',
    headerMode: 'none'
  })
  
  const App = createAppContainer(stackNavigator);

export default App