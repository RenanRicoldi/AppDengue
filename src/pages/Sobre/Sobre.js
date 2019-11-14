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
                    <Text style={ Styles.title }>sobre o projeto</Text>
                </View>
                <Image source={icon1X.def_iconDengue} style={ Styles.logoWrapper } resizeMode='contain'/>
            </View>
            <View style={Styles.terms}>
                <Text style={{fontSize: Dimensions.get('screen').fontScale*18}}>
                O projeto integrador de Combate ao Aedes surgiu pela iniciativa de profissionais das áreas da saúde, educação e ciências sociais aplicadas (design e comunicação) para fortalecer opções de combate ao mosquito transmissor de doenças como Zika, Dengue e Chikungunya: o Aedes Aegypti. Tal projeto vem sendo desenvolvido e aprimorardo desde 2015. Este material que você está recebendo visa informar basicamente sobre as doenças e convidar entidades, profissionais e interessados, a se juntarem como multiplicadores desta causa ao combate ao mosquito Aedes aegypti.
                </Text>
                <Image source={require('../../assets/images/Denuncia/telefone.png')} style={{ marginTop: Dimensions.get('screen').height/10, height: Dimensions.get('screen').height/10, aspectRatio: 3.0247933884 }} />
            </View>
        </View>
        )
    }
}

export default Denuncia