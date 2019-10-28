import {StyleSheet, Dimensions} from   'react-native'
import {colors, fonts} from '../../utils/consts'

const Styles=StyleSheet.create({
    container:{
        borderColor:colors.def_yellow,
        borderStyle:'solid',
        width:Dimensions.get('screen').width/1.3,
        height:Dimensions.get('screen').height/3,
        borderWidth:Dimensions.get('screen').width/90,
        borderTopRightRadius:Dimensions.get('screen').height/50,
        alignSelf:'flex-start',
        marginBottom:Dimensions.get('screen').height/50
        
    },
    containerTitle:{
        backgroundColor:colors.def_yellow,
        width:Dimensions.get('screen').width/1.3,
        height:Dimensions.get('screen').height/20,
        borderTopRightRadius:Dimensions.get('screen').height/50,
        marginLeft:Dimensions.get('screen').height/-150,
        marginTop:Dimensions.get('screen').height/-170,
        paddingLeft:Dimensions.get('screen').height/10,
        justifyContent:'center',
        alignItems:'flex-start',
        

    },
    subtitle:{
        backgroundColor:colors.def_yellow,
        width:Dimensions.get('screen').width/3,
        height:Dimensions.get('screen').height/25,
        marginLeft:Dimensions.get('screen').height/-150,
        paddingLeft:Dimensions.get('screen').height/15,
    },
    containerText:{
        justifyContent:'center',
        fontFamily: fonts.omnes_semibold,
        fontSize: Dimensions.get('window').width / 23,
    },
    containerDescription:{
        fontFamily: fonts.omnes_medium,
        fontSize: Dimensions.get('window').width / 30
    }
})

export default Styles