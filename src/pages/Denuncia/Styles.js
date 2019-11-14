import { StyleSheet, Dimensions } from 'react-native'
import { colors, fonts } from '../../utils/consts'

export const headerHeight = Dimensions.get('window').height / 3.8
const width = Dimensions.get('screen').width

const Styles = StyleSheet.create({

    headerWrapper:{
        height: headerHeight,
        width: Dimensions.get("window").width,
        //backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 5
    },

    logoWrapper:{
        height: headerHeight,
        width: Dimensions.get("window").width / 3,
      //  backgroundColor: 'yellow'
    },

    title:{

        fontFamily: fonts.rami_bold,
        fontSize: Dimensions.get('window').fontScale * 45,

        position: 'absolute',
        top: headerHeight - (Dimensions.get('window').width / 10) - 16,
        right: 10

    },

    rec1:{
        width: Dimensions.get("window").width / 2.3,
        height: headerHeight,
        marginTop: -4,
        borderColor: colors.def_yellow,
        borderWidth: 2
    },

    rec2:{
        position:'absolute',
        right: Dimensions.get("window").width / 8,
        bottom: headerHeight / 4.5,
        width: Dimensions.get("window").width ,
        height: headerHeight,
        borderColor: colors.def_yellow,
        borderWidth: 2,
      //  backgroundColor: 'red'
    },

    sendBtn:{
        backgroundColor: colors.def_black,
        width: Dimensions.get("window").width / 2.5,
        height: Dimensions.get("window").width / 8,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        marginBottom: 5

    },

    sendText:{
        fontFamily: fonts.rami_bold,
        fontSize: Dimensions.get('window').width / 12,
        textAlign: 'center',
        color: 'white',

        marginTop: -2
    },

    terms:{        
        backgroundColor: '#FFCB05',
        width: width/1.3,
        height: Dimensions.get('screen').height/1.65,
        paddingLeft: width/18,
        paddingRight: width/40, 
        paddingTop:Dimensions.get('screen').height/10,
        borderBottomRightRadius:width/10,
    }

})

export default Styles