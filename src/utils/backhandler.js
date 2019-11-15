import React, {useEffect} from 'react'
import {BackHandler} from 'react-native'

export default function backhandler(action, aux, state){

    BackHandler.addEventListener("hardwareBackPress", () => {

        console.log(state, 'estado')

        if(state == 0){
            aux()
            return true
        }else{
            console.log(action)
            action()
            return true
        }
        
    })
        
}