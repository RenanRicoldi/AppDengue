import React, { useState, useEffect } from 'react'
import {View,
        Text,
        TouchableOpacity,
        ScrollView,
        Image,
        Alert,
        Picker,
        ActivityIndicator} from 'react-native'

import Styles from './Styles'
import { icon1X, colors } from '../../utils/consts'
import AsyncStorage from '@react-native-community/async-storage'

import Modal from 'react-native-modal'

import axios from 'axios'

function Historico(props){

    const [tokenID, setToken] = useState('')

    const [selectedYear, changeYear] = useState(2020)

    const [isLoading, changeLoadingStatus] = useState(false)

    const navigate = props.navigation.navigate

    useEffect(() => {

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

    const fetchData = (monthValue) => {

        changeLoadingStatus(true)

        const finalData = {
            month: monthValue,
            year: selectedYear
        }

        console.log(finalData)

        axios({
            method:'POST',
            url: 'https://hqaedesuel.herokuapp.com/api/response-questionnaire/',
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'Token ' + tokenID},
            data: finalData
        }).then((response) => {
            
            console.log(response.data, 'response')
            changeLoadingStatus(false)
            navigate('HistoricoIndividual', {data:response.data, month:monthValue, year:selectedYear})

        }).catch(error => {
            console.log(error, 'errorMessage')
            changeLoadingStatus(false)
            Alert.alert('Não foi possível baixar o seu histórico',
                        'Verifique sua conexão de internet e tente novamente')
        })

    }

    return(
        <View>

            <Modal isVisible={isLoading}>
                <ActivityIndicator color={colors.def_yellow} size='large'/>
            </Modal>

            <View style={ Styles.headerWrapper }>
                <View>
                    <View style={ Styles.rec1 }/>
                    <View style={ Styles.rec2 }/>
                    <Text style={ Styles.title }>histórico de</Text>
                    <Text style={ Styles.title }>respostas</Text>
                </View>
                <Image source={icon1X.def_iconDengue} style={ Styles.logoWrapper } resizeMode='contain'/>
            </View>

            <View style={ Styles.scrollView }>
                <ScrollView>

                <Picker
                    selectedValue={selectedYear}
                    mode="dropdown"
                    onValueChange={(value) => changeYear(value)}
                    style={Styles.button}>
                    <Picker.Item style={ Styles.btnText } label="2020" value="2020" />
                    <Picker.Item label="2019" value="2019" />
                </Picker>

                <TouchableOpacity style={Styles.button} onPress={() => fetchData(1)}>
                    <Text style={ Styles.btnText }>janeiro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button} onPress={() => fetchData(2)}>
                    <Text style={ Styles.btnText }>fevereiro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button} onPress={() => fetchData(3)}>
                    <Text style={ Styles.btnText }>março</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button} onPress={() => fetchData(4)}>
                    <Text style={ Styles.btnText }>abril</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button} onPress={() => fetchData(5)}>
                    <Text style={ Styles.btnText }>maio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button} onPress={() => fetchData(6)}>
                    <Text style={ Styles.btnText }>junho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button} onPress={() => fetchData(7)}>
                    <Text style={ Styles.btnText }>julho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button} onPress={() => fetchData(8)}>
                    <Text style={ Styles.btnText }>agosto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button} onPress={() => fetchData(9)}>
                    <Text style={ Styles.btnText }>setembro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button} onPress={() => fetchData(10)}>
                    <Text style={ Styles.btnText }>outubro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button} onPress={() => fetchData(11)}>
                    <Text style={ Styles.btnText }>novembro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button} onPress={() => fetchData(12)}>
                    <Text style={ Styles.btnText }>dezembro</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
            
        </View>
    )

}

export default Historico