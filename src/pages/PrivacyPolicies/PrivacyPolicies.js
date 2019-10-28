import React from 'react'
import { View, Text, Image, StatusBar,ScrollView,TouchableOpacity } from 'react-native'
import MainButton from '../../components/MainButton/MainButton'
import {icon1X,termo} from '../../utils/consts'

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'


import Main from '../Main/Main'
import Doencas from '../Doencas/Doencas'
import Checklist from '../Checklist/Checklist'
// import Sobre from '../Sobre/Sobre'


import Styles from './Styles'

class Privacy extends React.Component{
    render(){
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
                            <Text>Politica de Privacidade</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('Início') } style={Styles.button}>
                            <Text style={Styles.buttonText}>Concordo</Text>
                    </TouchableOpacity>
                    
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
    // Sobre: {
    //     screen: Sobre
    // },
    Checklist: {
        screen: Checklist
    },
  },
  {
    initialRouteName: 'Política de Privacidade',
    headerMode: 'none'
  })
  
  const App = createAppContainer(stackNavigator);

export default App