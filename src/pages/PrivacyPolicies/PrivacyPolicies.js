import React from 'react'
import { View, Text, Image, StatusBar } from 'react-native'

import Styles from './Styles'

class Privacy extends React.Component{
    render(){
        return(
            <>
                <StatusBar barStyle='dark-content' backgroundColor='#fff'/>
                <View style={ Styles.background }>                    
                    <View style={ Styles.terms }>
                        <Image source={ require('../../../assets/Logo/recursosdengue.png') }  style = { Styles.image }/>
                    </View>
                </View>
            </>
        )
    }
}

export default Privacy