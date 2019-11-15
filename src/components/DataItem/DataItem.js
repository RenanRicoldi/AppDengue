import React, { useState } from 'react'
import {View,   
        Text,
        Image,
        Dimensions} from 'react-native'

import {icon1X} from '../../utils/consts'

import { colors } from '../../utils/consts'
import Styles from './Styles'
import { ScrollView } from 'react-native-gesture-handler'

function CheckBtn({title, color}){

    return(
        <View style={ Styles.button }>
            <View style={ [Styles.check, color] }/>
            <View style={{width: Dimensions.get('window').width / 3}}>
                <Text style={ Styles.checkText }>{ title }</Text>
            </View>
        </View>
    )

}

function DataItemAux({ title, icon, isOk }){

    let color, text

    if(isOk === 'correto'){

        color = {
            borderColor: colors.def_green,
            backgroundColor: colors.def_green
        }

        text = 'correto'

    }else if (isOk === 'incorreto'){

       color = {
            borderColor: colors.def_red,
            backgroundColor: colors.def_red
       }

        text = 'incorreto'

    }else{

        color = {
            borderColor: colors.def_gray,
            backgroundColor: colors.def_gray
       }

        text = 'não se aplica'

    }

    return(
        <View style={ Styles.wrapper }>

            <View style={ Styles.iconWrapper }>
                <Image style={ Styles.icon } source={ icon }/>
            </View>

            <View>
                <View style={ Styles.header }>
                    <Text style={ Styles.headerText}>{ title }</Text>
                </View>
                <View style={ Styles.buttonArea }>
                    <CheckBtn title={text} color={color} />
                </View>
            </View>
           
        </View>
    )

}

function DataItem({ lista, date, swiperHeight }){

    const finalDate = 'Respondido em ' + date.slice(8,10) + '/' + date.slice(5,7) + '/' + date.slice(0,4)

    return(
        <View style={{width: Dimensions.get('window').width}}>

            <ScrollView showsVerticalScrollIndicator={false}>

            <Text style={ Styles.date }>{finalDate}</Text>

            <DataItemAux title='Sacos de lixo' icon={icon1X.def_icon1} isOk={lista.saco_lixo}/>
            <DataItemAux title='Água acumulada' icon={icon1X.def_icon2} isOk={lista.acumular_agua}/>
            <DataItemAux title='Calhas' icon={icon1X.def_icon3} isOk={lista.limpar_calhas}/>
            <DataItemAux title='Plantas' icon={icon1X.def_icon4} isOk={lista.esvaziar_plantas}/>
            <DataItemAux title='Vasos' icon={icon1X.def_icon5} isOk={lista.lavar_vasos}/>
            <DataItemAux title='Recipientes limpos' icon={icon1X.def_icon6} isOk={lista.lavar_recipientes}/>
            <DataItemAux title='Recipientes expostos' icon={icon1X.def_icon7} isOk={lista.vedar_galoes}/>
            <DataItemAux title='Pneus' icon={icon1X.def_icon9} isOk={lista.retirar_agua}/>
            <DataItemAux title='Cacos' icon={icon1X.def_icon10} isOk={lista.caco_vidro}/>
            <DataItemAux title='Patentes' icon={icon1X.def_icon11} isOk={lista.patentes_vaso}/>
            <DataItemAux title='Piscinas' icon={icon1X.def_icon13} isOk={lista.piscina_limpa}/>
            <DataItemAux title='Ralos' icon={icon1X.def_icon14} isOk={lista.tampe_ralos}/>
            <DataItemAux title='Lonas' icon={icon1X.def_icon15} isOk={lista.lonas_esticadas}/>
            <DataItemAux title='Ar-condicionado' icon={icon1X.def_icon16} isOk={lista.ar_condicionado}/>
            <DataItemAux title='Embalagens' icon={icon1X.def_icon17} isOk={lista.garrafa_pet_vidro}/>
            <DataItemAux title='Caixa d`água' icon={icon1X.def_icon18} isOk={lista.caixa_dagua}/>
            <DataItemAux title='Entulhos' icon={icon1X.def_icon19} isOk={lista.descartar_entulhos}/>
            </ScrollView>

        </View>
            

       
    )

}

export default DataItem