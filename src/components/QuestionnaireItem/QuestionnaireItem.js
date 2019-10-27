import React, { useState } from 'react'
import { View,
         Text,
         Image,
         TouchableOpacity} from 'react-native'
import Styles from './Styles'
import { colors } from '../../utils/consts'

/*                                  Questionnaire Item                                */
/* Props:                                                                             */
/* id = id do item                                                                    */
/* title (string) = define o titulo                                                   */
/* image (require(src)) = define a imagem do item                                     */
/* isOk (function) = funcao que retorna um objeto sendo {itemID, boolean}             */

function checkButton(props){

    if(props.checked){
        return(
            <View style={ Styles.checkWrapper }>
                <TouchableOpacity onPress={() => props.check(true)}
                style={ [Styles.checkBtn, {borderColor:props.btnColor, backgroundColor:props.btnColor}]}/>
                <Text style={ Styles.checkTitle }>{props.text}</Text>
            </View>
        )
    }else{
        return(
            <View style={ Styles.checkWrapper }>
                <TouchableOpacity onPress={() => props.check(false)}
                style={ [Styles.checkBtn, {borderColor:props.btnColor}]}/>
                <Text style={ Styles.checkTitle }>{props.text}</Text>
            </View>
        )
    }

}

function QuestionnaireItem(props) {

    const itemID = props.id

    const [isSelected, changeStatus] = useState(false)
    const [isChecked, changeCheck] = useState({
        gray:false,
        red:false,
        green:false,
        yellow:false
    })
    

    const callbackGray = () =>{
        changeCheck({
            gray:!isChecked.gray,
            red:false,
            green:false,
            yellow:false
        })
    }

    const callbackRed = () =>{
        changeCheck({
            gray:false,
            red:!isChecked.red,
            green:false,
            yellow:false
        })
    }

    const callbackGreen = () =>{
        changeCheck({
            gray:false,
            red:false,
            green:!isChecked.green,
            yellow:false
        })
    }

    const callbackYellow = () =>{
        changeCheck({
            gray:false,
            red:false,
            green:false,
            yellow:!isChecked.yellow
        })
    }
 
    const setStatus = () => {

        changeStatus(!isSelected)
        
        let itemOK

        if(props.isOk != undefined){

            if(isChecked.green || isChecked.yellow){
                itemOK = true
            }else{
                itemOK = false
            }


            props.isOk({itemID, itemOK})

        }

    }

    if(isSelected){
        return(
            <View style={ [Styles.mainContainer, {height: 370}] }>
                <TouchableOpacity onPress={() => setStatus()} 
                                  style={{height:98, flexDirection: 'row', alignItems:'center'}}>
                    <Image style={ Styles.photoWrapper } source={props.image}/>
                    <Text style={ Styles.title }>{props.title}</Text>
                </TouchableOpacity>
                
                {checkButton({text:'não se aplica', btnColor:colors.def_gray, checked: isChecked.gray, check:callbackGray})}
                {checkButton({text:'incorreto', btnColor:colors.def_red, checked: isChecked.red, check:callbackRed})}
                {checkButton({text:'correto', btnColor:colors.def_green, checked: isChecked.green, check:callbackGreen})}
                {checkButton({text:'corrigido', btnColor:colors.def_yellow, checked: isChecked.yellow, check:callbackYellow})}

            </View>
        )
    }else{
        return(
            <TouchableOpacity onPress={() => setStatus()} style={ [Styles.mainContainer, {alignItems: 'center', flexDirection: 'row', height: 100}] }>
                <View style={ Styles.photoWrapper }></View>
                <Text style={ Styles.title }>{props.title}</Text>
            </TouchableOpacity>
        )        
    }

}

export default QuestionnaireItem