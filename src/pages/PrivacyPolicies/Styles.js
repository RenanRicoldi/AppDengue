import { StyleSheet, Dimensions } from 'react-native'
import {colors, fonts} from '../../utils/consts'

const width = Dimensions.get('screen').width

const valor = width/6

const Styles = StyleSheet.create({

    waitingScreen:{
        height: '100%',
        backgroundColor: colors.def_yellow,
        justifyContent: 'center',
        alignItems: 'center'
    },

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

    title:{
        fontFamily: fonts.rami_bold,
        fontSize: Dimensions.get('screen').fontScale*30,
        bottom: Dimensions.get('screen').width / 55
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
        fontFamily: fonts.omnes_medium,
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
        fontFamily: fonts.rami_bold,
        fontSize: Dimensions.get('screen').fontScale*30,
        color:colors.def_white
    },
    scroll:{
        
    }
})

export default Styles