import React, { useState } from 'react'
import {View,   
        Text,
        ScrollView,
        Image} from 'react-native'

import {icon1X, colors} from '../../utils/consts'

import SwiperFlatList from 'react-native-swiper-flatlist'

import DataItem from '../../components/DataItem/DataItem'
import Styles from './Styles'

function getMonth(month){

    switch(month){
        case 1:
            return 'Janeiro'
        case 2:
            return 'Fevereiro'
        case 3:
            return 'Março'
        case 4:
            return 'Abril'
        case 5:
            return 'Maio'
        case 6:
            return 'Junho'
        case 7:
            return 'Julho'
        case 8:
            return 'Agosto'
        case 9:
            return 'Setembro'
        case 10:
            return 'Outubro'
        case 11:
            return 'Novembro'
        case 12:
            return 'Dezembro'
    }

}

function DotIndicator(){
    return(
        <View style={ Styles.dot }/>
    )
}

let dotArray

function HistoricoIndividual(props){

    const { navigation } = props
    const items = navigation.getParam('data', {})

    console.log(items.length, 'data')

    dotArray = new Array(items.length)

    if(items.length == 0){
        return(
            <View>

                <View style={ Styles.headerWrapper }>
                    <View>
                        <View style={ Styles.rec1 }/>
                        <View style={ Styles.rec2 }/>
                        <Text style={ Styles.title }>Histórico de</Text>
                        <Text style={ Styles.title }>{getMonth(navigation.getParam('month', 0))}/{navigation.getParam('year', 0)}</Text>
                    </View>
                    <Image source={icon1X.def_iconDengue} style={ Styles.logoWrapper } resizeMode='contain'/>
                </View>

                <View style={{justifyContent: 'center', alignItems:'center', height: '68%'}}>
                    <Text style={ Styles.emptyWarning }>Nada foi enviado nesse periódo</Text>
                </View>

            </View>
        )
    }else{

        return(
            <View>
    
                <View style={ Styles.headerWrapper }>
                    <View>
                        <View style={ Styles.rec1 }/>
                        <View style={ Styles.rec2 }/>
                        <Text style={ Styles.title }>Histórico de</Text>
                        <Text style={ Styles.title }>{getMonth(navigation.getParam('month', 0))}/{navigation.getParam('year', 0)}</Text>
                    </View>
                    <Image source={icon1X.def_iconDengue} style={ Styles.logoWrapper } resizeMode='contain'/>
                </View>
    
                <SwiperFlatList style={ Styles.swiper } showPagination paginationActiveColor={colors.def_yellow}>
                    {items.map((item) => {
                        return <DataItem lista={item.data} date={item.datetime}/>
                    })}
                </SwiperFlatList>
                
    
            </View>
        )
    
        
    }
    
    

}

export default HistoricoIndividual