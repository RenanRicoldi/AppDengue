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
/* border ({borderColor:color}) = define a cor da borda, dependendo da necessiade de  */
/*                              avisar o usuario se o item ja foi preenchido ou nao   */

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

    const [isFirstRun, changeRunStatus] = useState(true)
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

        changeRunStatus(false)
    }

    const callbackRed = () =>{
        changeCheck({
            gray:false,
            red:!isChecked.red,
            green:false,
            yellow:false
        })

        changeRunStatus(false)
    }

    const callbackGreen = () =>{
        changeCheck({
            gray:false,
            red:false,
            green:!isChecked.green,
            yellow:false
        })

        changeRunStatus(false)
    }

    const callbackYellow = () =>{
        changeCheck({
            gray:false,
            red:false,
            green:false,
            yellow:!isChecked.yellow
        })

        changeRunStatus(false)
    }
 
    const returnStatus = () => {

        let itemOK

        if(props.isOk != undefined){

            if(!isChecked.gray && !isChecked.red && !isChecked.green && !isChecked.yellow){
                itemOK = undefined
            }else if(isChecked.green || isChecked.yellow || isChecked.gray ){
                itemOK = true
            }else{
                itemOK = false
            }

            props.isOk({id: itemID, item: itemOK})

        }

    }

    const verifyAttention = () => {

        if(props.border.borderColor == colors.def_yellow){
            if(isFirstRun){
                return props.border
            }
        }
        
        if(!isChecked.gray && !isChecked.red && !isChecked.green && !isChecked.yellow)
            return {borderColor:colors.def_red}
        else
            return {borderColor:colors.def_yellow}
    }

    if(isSelected){

        return(
            <View style={ [Styles.mainContainer, verifyAttention()] }>
                <TouchableOpacity onPress={() => changeStatus(!isSelected)} 
                                  style={{flexDirection: 'row', alignItems:'center', padding:4}}>
                    <Image style={ Styles.photoWrapper } source={props.image}/>
                    <Text style={ Styles.title }>{props.title}</Text>
                </TouchableOpacity>
                
                {checkButton({text:'não se aplica', btnColor:colors.def_gray, checked: isChecked.gray, check:callbackGray})}
                {checkButton({text:'incorreto', btnColor:colors.def_red, checked: isChecked.red, check:callbackRed})}
                {checkButton({text:'correto', btnColor:colors.def_green, checked: isChecked.green, check:callbackGreen})}
                {checkButton({text:'corrigido', btnColor:colors.def_yellow, checked: isChecked.yellow, check:callbackYellow})}

                {returnStatus()}

            </View>
        )
    }else{
        return(
            <TouchableOpacity onPress={() => changeStatus(!isSelected)} style={ [Styles.mainContainer, {alignItems: 'center', flexDirection: 'row', padding: 4}, verifyAttention()] }>
                <Image style={ Styles.photoWrapper } source={props.image}/>
                <Text style={ Styles.title }>{props.title}</Text>
            </TouchableOpacity>
        )        
    }

}

export default QuestionnaireItem