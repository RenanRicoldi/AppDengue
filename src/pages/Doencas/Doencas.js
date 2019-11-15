import React from 'react'
import { View, Image, StatusBar,ScrollView, Dimensions } from 'react-native'
import DoencasContainer from '../../components/DoencaContainer/DoencaContainer'
import Styles from './Styles'
import {icon1X} from '../../utils/consts'

class Doencas extends React.Component {
    render(){
        return(
            
                
                <View style={ Styles.background }>
                    <StatusBar barStyle='dark-content' backgroundColor='#FFCB05'/>
                    <View style={{width: Dimensions.get('window').width ,alignItems: 'flex-end', paddingRight: Dimensions.get('window').width/20}}>
                        <Image source={ icon1X.def_iconDengue }  style = { Styles.image }/>
                    </View>
                    <ScrollView style={Styles.scroll} showsVerticalScrollIndicator={false}>
                        <DoencasContainer Doenca={'dengue'} description={'Trata-se de uma doença viral transmitida pelo mosquito Aedes aegypti A infecção por dengue pode ser assintomática, leve ou causar doença grave, levando a morte.'} 
                            sintomas={'Febre alta\nDor de cabeça\nDor atrás dos olhos\nDor nas articulações'}/>
                        <DoencasContainer Doenca={'chikungunya'} description={'A Febre Chikungunya é uma doença transmitida pelos mosquitos Aedes aegypti e Aedes albopictus. Chikungunya significa “aqueles que se dobram” em suaíli, um dos idiomas da Tanzânia. Refere-se à aparência curvada dos pacientes que foram atendidos na primeira epidemia documentada, na Tanzânia, localizada no leste da África, entre 1952 e 1953.'} 
                            sintomas={'Febre Alta\nDor de cabeça\nDor muscular\nDores intensas nas articulações de pés e mãos'}/>
                        <DoencasContainer Doenca={'zika vírus'} description={'O Zika é um vírus transmitido pelo aedes aegypti e identificado pela primeira vez no Brasil em abril 2015. O vírus Zika recebeu a mesma denominação do local de origem de sua identificação em 1947, após ser detectado em macacos sentinelas para monitoramento da febre amarela, na floresta Zika, em Uganda (África).'} 
                            sintomas={'Febre Alta\nDor de cabeça\nDor muscular\nDores intensas nas articulações de pés e mãos'}/>
                    </ScrollView>
                    
                </View>
            
        )
    }
}

export default Doencas