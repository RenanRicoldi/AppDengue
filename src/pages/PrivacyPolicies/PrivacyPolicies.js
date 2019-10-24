import React from 'react'
import { View, Text, Image, StatusBar } from 'react-native'
import MainButton from '../../components/MainButton/MainButton'
import {colors,termo} from '../../utils/consts'

import Styles from './Styles'

class Privacy extends React.Component{
    render(){
        return(
            <>
                <StatusBar barStyle='dark-content' backgroundColor='#fff'/>
               
                <View style={ Styles.background }>                    
                <Text>Politica de Privacidade</Text>
                    <View style={ Styles.terms }>
                        <Text style={Styles.texto}>{termo}</Text>
                        <MainButton color={colors.def_black} title={'concordo'} corner={'Bottom'}/>
                    </View>
                </View>
            </>
        )
    }
}

export default Privacy