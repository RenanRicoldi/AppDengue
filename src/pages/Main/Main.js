import React from 'react'
import { 
        Text,   
        View,
        Image,
        StatusBar, 
        TouchableOpacity } from 'react-native'

import { colors,icon1X } from '../../utils/consts'
import MainButton from '../../components/MainButton/MainButton'
import Styles from './Styles'

class Main extends React.Component {
    changeView = (viewName) => {
        this.props.navigation.navigate(viewName)
    }

    render(){
        return(
            <>
                <StatusBar barStyle='dark-content' backgroundColor={colors.def_white}/>
                
                <View style={ Styles.background }>
                    <View style={Styles.header}>
                        <View style={Styles.box}></View>
                        <Image style={Styles.imagem} source={icon1X.def_iconDengue}/>
                    </View>
                    <MainButton color={colors.def_yellow} corner ={'Top'}title={'Checklist'} changeView={this.changeView} viewName='Checklist'/>
                    <MainButton color={colors.def_yellow} title={'Historico de Respostas'} changeView={this.changeView} viewName='Historico'/>
                    <MainButton color={colors.def_yellow} title={'Mapa'} changeView={this.changeView} viewName='Mapa'/>
                    <MainButton color={colors.def_yellow} title={'Denuncia'} changeView={this.changeView} viewName='Denuncia'/>
                    <MainButton color={colors.def_yellow} title={'Doenças'} changeView={this.changeView} viewName='Doencas'/>
                    <MainButton color={colors.def_yellow} corner ={'Bottom'} title={'Sobre o Projeto'} changeView={this.changeView} viewName='Sobre'/>
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
