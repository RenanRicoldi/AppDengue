import React from 'react'
import {View,Text,TouchableOpacity,ScrollView} from 'react-native'
import Styles from './Styles'


class Historico extends React.Component{

    render(){
        return(
            <View>
                <ScrollView>
                <TouchableOpacity style={Styles.button}>
                    <Text>Janeiro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}>
                    <Text>Fevereiro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}>
                    <Text>Marços</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}>
                    <Text>Abril</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}>
                    <Text>Maio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}>
                    <Text>Junho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}>
                    <Text>Julho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}>
                    <Text>Agosto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}>
                    <Text>Setembro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}>
                    <Text>Outubro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}>
                    <Text>Novembro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}>
                    <Text>Dezembro</Text>
                </TouchableOpacity>
                </ScrollView>
                
            </View>
        )
    }
}

export default Historico