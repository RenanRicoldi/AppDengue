import React from 'react'
import {View,Text,Image} from 'react-native'
import Styles from './Styles'

import {icon1X} from '../../utils/consts'

class Denuncia extends React.Component{

    render(){
        return(

            <View style={ Styles.background }>  

                <View style={ Styles.terms }>
                    <View style={Styles.header}>
                        <Image source={icon1X.def_iconMosquito } style={Styles.imageHeader}/>                 
                        <Text>Denúncia</Text>
                    </View>
                </View>

            </View>
        )
    }
}

export default Denuncia