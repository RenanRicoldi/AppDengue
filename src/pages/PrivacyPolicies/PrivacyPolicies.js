import React from 'react'
import { View, Text, Image, StatusBar,ScrollView,TouchableOpacity } from 'react-native'
import MainButton from '../../components/MainButton/MainButton'
import {icon1X,termo} from '../../utils/consts'

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
                    <TouchableOpacity onPress={()=>null} style={Styles.button}>
                            <Text style={Styles.buttonText}>Concordo</Text>
                    </TouchableOpacity>
                    
                </View>
            </>
        )
    }
}

export default Privacy