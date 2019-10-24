import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../utils/consts'

const valor = Dimensions.get('screen').width*1.3

const Styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: colors.def_white
    },
    header:{
        flexDirection:'row'
    },
    box:{
        width:Dimensions.get('screen').width/3,
        height:Dimensions.get('screen').height/10,
        borderStyle:'solid',
        borderColor:colors.def_yellow,
        borderWidth:Dimensions.get('screen').width/70,
        ///flexDirection:'row'
    },
    imagem:{
        width:Dimensions.get('screen').width/3,
        height:Dimensions.get('screen').width/2.4*0.744445,
        //flexDirection:"row-reverse"
    }
    
})

export default Styles