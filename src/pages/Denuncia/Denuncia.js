import React from 'react'
import {View,Text,Image, Dimensions} from 'react-native'
import Styles from './Styles'
import { icon1X } from '../../utils/consts'

class Denuncia extends React.Component{

    render(){
        return(

            <View style={{flex:1}}>
            <View style={ Styles.headerWrapper }>
                <View>
                    <View style={ Styles.rec1 }/>
                    <View style={ Styles.rec2 }/>
                    <Text style={ Styles.title }>denúncia</Text>
                </View>
                <Image source={icon1X.def_iconDengue} style={ Styles.logoWrapper } resizeMode='contain'/>
            </View>
            <View style={Styles.terms}>
                <Text style={{fontSize: Dimensions.get('screen').fontScale*18}}>
                    {'Denúncias de potenciais criadouros do mosquito ou com larvas que não possam ser removidos, ligue para o '}
                    <Text style={{fontWeight: 'bold'}}>
                        disque dengue de 
                    </Text>
                    {' Londrina'}
                </Text>
                <Image source={require('../../assets/images/Denuncia/telefone.png')} style={{ marginTop: Dimensions.get('screen').height/10, height: Dimensions.get('screen').height/10, aspectRatio: 3.0247933884 }} />
            </View>
        </View>
        )
    }
}

export default Denuncia