import { StyleSheet, Dimensions } from 'react-native'
import {colors} from '../../utils/consts'

const width = Dimensions.get('screen').width

const valor = width/6

const Styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    header:{
        flexDirection:'row',
        marginTop:Dimensions.get('screen').height/-40,
        position:'absolute'
    },
    imageHeader:{
        width: width/10*1.648484,
        height:  width/10,
        
    },
    terms:{        
        backgroundColor: '#FFCB05',
        width: width/1.3,
        height: Dimensions.get('screen').height/1.3,
        paddingHorizontal:valor/4,
        paddingTop:Dimensions.get('screen').height/60,
        borderBottomLeftRadius:width/50,
        borderBottomRightRadius:width/50,
        borderTopRightRadius:width/50,
    },
    termText:{
        justifyContent:'center',
        fontSize: Dimensions.get('screen').fontScale*23
    },
    button:{
        backgroundColor:colors.def_black,
        width:Dimensions.get('screen').width/2,
        height:Dimensions.get('screen').height/15,
        borderBottomRightRadius:width/50,
        justifyContent:'center',
        alignItems:'center',
        marginTop:Dimensions.get('screen').height/-30,
    },
    buttonText:{
        color:colors.def_white
    },
    scroll:{
        
    }
})

export default Styles