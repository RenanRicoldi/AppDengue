import React from 'react'
import { View, Image, StatusBar } from 'react-native'
import { colors } from '../../utils/consts'

import Styles from './Styles'

class Main extends React.Component {
    render(){
        return(
            <>
                <StatusBar barStyle='dark-content' backgroundColor={colors.def_white}/>
                <View style={ Styles.background }>
                    <Image source={ require('../../assets/images/Inicio/logodengue.png') }  style = { Styles.image }/>
                </View>
            </>
        )
    }
}

export default Main