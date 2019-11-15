import React, { useState, useEffect } from 'react'
import {View,
        Text,
        FlatList,
        Image,
        Dimensions,
        ScrollView,
        TouchableOpacity,
        Alert,
        Picker} from 'react-native'
import Styles from './Styles'

import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import Geolocation from 'react-native-geolocation-service'

import { icon1X, colors } from '../../utils/consts' 
import QuestionnaireItem from '../../components/QuestionnaireItem/QuestionnaireItem'
import checklistItems, {fillData} from '../../utils/checklistItems'

let localObj = {latitude:undefined, longitude:undefined}

function Checklist(props){

    const [returnedData, changeData] = useState(new Array(17))
    const [tokenID, setToken] = useState('')
    const [itemBorder, changeBorder] = useState({borderColor:colors.def_yellow})
    const [houseType, changeHouseType] = useState('undefinedhouse')

    useEffect(() => {

        Geolocation.getCurrentPosition(
            (position) => {
                localObj.latitude = position.coords.latitude
                localObj.longitude = position.coords.longitude    
            },
            (error) => {
                console.log(error)
                localObj.latitude = localObj.longitude = undefined
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        )

        retrieveToken()

    })

    const retrieveToken = async () => {

        try {
            var value = await AsyncStorage.getItem('tokenID');
         if (value !== null) {
            console.log(JSON.parse(value), "from internal")
            setToken(JSON.parse(value))
         }
        } catch (error) {
            console.log(error)
        }
    }

    const validate = (props) =>{

        let data_aux = returnedData

        returnedData[props.id] = props.item

        changeData(data_aux)

    }

    const navigate = props.navigation.navigate

    const sendData = () => {

        let i
        for(i = 0; i< 17; i++){

            if(returnedData[i] == undefined){
                Alert.alert('Você não preeencheu todos os itens!',
                            'Verifique os itens em vermelho e tente novamente.')
                changeBorder(colors.def_red)
                return
            }

        }

        if(localObj.latitude == undefined){
            Alert.alert('Não foi possível pegar sua localização',
                        'Verifique se seu GPS está ativado, ou se você concedeu permissões de local, e tente novamente.')
            return
        }

        if(houseType === 'undefinedhouse'){
            Alert.alert('Você não selecionou o seu tipo de moradia',
                        'Adicione e tente novamente.')
            return
        }


        let finalData = fillData(houseType, returnedData, localObj.latitude, localObj.longitude)

        axios({
            method:'post',
            url: 'https://hqaedesuel.herokuapp.com/api/register-questionnaire/',
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'Token ' + tokenID},
            data: finalData
        }).then((response) => {

            Alert.alert('Checklist enviada com sucesso!', '', 
            [{text: 'ok', onPress: () => navigate('Início')}])
            
            console.log(response)

        }).catch(error => {
            console.log(error, 'errorMessage')
            Alert.alert('Não foi possível enviar sua checklist',
                        'Verifique suas respostas e tente novamente')
        })

    }

    /* View area */

    return(
        <View style={{flex:1}}>
            <View style={ Styles.headerWrapper }>
                <View>
                    <View style={ Styles.rec1 }/>
                    <View style={ Styles.rec2 }/>
                    <Text style={ Styles.title }>CHECKLIST</Text>
                </View>
                <Image source={icon1X.def_iconDengue} style={ Styles.logoWrapper } resizeMode='contain'/>
            </View>
            
            <ScrollView contentContainerStyle={{alignItems: 'flex-end'}}>

                <Picker
                    selectedValue={houseType}
                    style={ Styles.houseTypeSelector }
                    onValueChange={(value) => changeHouseType(value)}>
                    <Picker.Item label="Selecione o tipo de moradia" value="undefinedhouse" />
                    <Picker.Item label="Casa de Alvenaria (Tijolos, telhas e etc)" value="casa_de_alvenaria" />
                    <Picker.Item label="Cortiços" value="cortico" />
                    <Picker.Item label="Edifício" value="edificio" />
                    <Picker.Item label="Condomínio" value="condominio" />
                    <Picker.Item label="Palafita" value="palafita" />
                    <Picker.Item label="Oca" value="oca" />
                    <Picker.Item label="Pau a pique" value="pau_a_pique" />
                    <Picker.Item label="Barraco (papelões, latas, retos de materiais reciláveis e isopor)" value="barraco" />
                    <Picker.Item label="Outro" value="outro" />
                </Picker>

                <FlatList 
                        style={{ width: Dimensions.get('window').width }}
                        data={checklistItems}
                        renderItem={({ item }) => (
                            <QuestionnaireItem title={item.title} image={item.image} id={item.id} isOk={validate} border={itemBorder}/>
                        )}
                        keyExtractor={item => item.id.toString()}/>

                <TouchableOpacity onPress={() => sendData() }activeOpacity={0.8} style={ Styles.sendBtn }>
                    <Text style={ Styles.sendText }>enviar</Text>
                </TouchableOpacity>

            </ScrollView>

        </View>
    )
}

export default Checklist