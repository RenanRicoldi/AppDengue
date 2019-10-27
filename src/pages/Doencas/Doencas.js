import React from 'react'
import { View, Image, StatusBar,ScrollView } from 'react-native'
import DoencasContainer from '../../components/DoencaContainer/DoencaContainer'
import Styles from './Styles'
import {icon1X} from '../../utils/consts'

class Doencas extends React.Component {
    render(){
        return(
            
                
                <View style={ Styles.background }>
                    <StatusBar barStyle='dark-content' backgroundColor='#FFCB05'/>
                    <Image source={ icon1X.def_iconDengue }  style = { Styles.image }/>
                    <ScrollView style={Styles.scroll}>
                        <DoencasContainer Doenca={'Doença 1'} description={'eita nem sei... mas não importa é só um texte'} 
                            sintomas={'Dor de cabeça'}/>
                        <DoencasContainer Doenca={'Programar um app'} description={'ato de desenvolver um software para mobiles'} 
                            sintomas={'GAL'}/>
                    </ScrollView>
                    
                </View>
            
        )
    }
}

export default Doencas