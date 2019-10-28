import {StyleSheet,Dimensions} from 'react-native'
import {colors,fonts} from '../../utils/consts'

const Styles=StyleSheet.create({
    button:{
        backgroundColor:colors.def_yellow,
        width:Dimensions.get('screen').width/1.2,
        height:Dimensions.get('screen').height/15,
        marginBottom:Dimensions.get('screen').height/35,
        justifyContent:'center',
        alignItems:'center'
    }

})

export default Styles