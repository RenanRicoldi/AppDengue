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

export default Main