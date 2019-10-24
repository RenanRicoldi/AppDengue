import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../utils/consts'

//const valor = Dimensions.get('screen').width*1.3

const Styles = StyleSheet.create({
    button:{
        alignItems:'center',
        justifyContent:'center',
        width:Dimensions.get('screen').width/1.5,
        height:Dimensions.get('screen').height/15,
        marginTop:Dimensions.get('screen').height/30,
    }
    
})

export default Styles