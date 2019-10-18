import React from 'react'
import { View, Image, StatusBar } from 'react-native'

import Styles from './Styles'

class Main extends React.Component {
    render(){
        return(
            <>
                <StatusBar barStyle='dark-content' backgroundColor='#FFCB05'/>
                <View style={ Styles.background }>
                    <Image source={ require('../../../assets/Inicio/logodengue.png') }  style = { Styles.image }/>
                </View>
            </>
        )
    }
}

export default Main