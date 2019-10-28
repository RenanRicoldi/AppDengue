import React from 'react'
import {View,Text} from 'react-native'
import Styles from './Styles'

class DoencaContainer extends React.Component{

    render(){
        return(
            <View style={Styles.container}>
                <View style={Styles.containerTitle}>
                    <Text style={Styles.containerText}>{this.props.Doenca}</Text>
                </View>
                <Text style={Styles.containerDescription} >{this.props.description}</Text>
                <View style={Styles.subtitle}>
                    <Text style={Styles.containerText}>Sintomas</Text>
                </View>
                <Text style={Styles.containerDescription}>{this.props.sintomas}</Text>
            </View>
        )
    }
}

export default DoencaContainer