import React from 'react'
import {View,Text,StatusBar,ScrollView} from 'react-native'
import Styles from './Styles'
import {termo} from '../../utils/consts'

class Sobre extends React.Component{

    render(){
        return(
            <>
                <StatusBar barStyle='dark-content' backgroundColor='#fff'/>
               
                <View style={ Styles.background }>  
                 
                    <View style={ Styles.terms }>
                        <ScrollView style={Styles.scroll}>
                            <Text style={Styles.termText}>{termo}</Text>
                        </ScrollView>
                    </View>
                    
                </View>
            </>
        )
    }
}

export default Sobre