import { StyleSheet, Dimensions } from 'react-native'
import { colors, fonts } from '../../utils/consts'

const Styles = StyleSheet.create({

    mainContainer:{
        flex: 1,
        justifyContent: 'center'
    },

    header:{
        width: Dimensions.get('window').width / 2,
        backgroundColor: colors.def_black,
        padding: 5,
        borderTopRightRadius: 15,
        marginTop: -30,
        marginLeft: -Dimensions.get('window').width / 2
    },

    mainArea:{
        padding: 5,
        width:  Dimensions.get('window').width / 1.5,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.def_yellow,

        marginTop: -(Dimensions.get('window').width / 10) / 2
    },

    title:{
        fontFamily: fonts.rami_bold,
        fontSize: Dimensions.get('window').width / 10,
        color: 'white'
    },
    
    subtitle:{
        fontFamily: fonts.omnes_semibold,
        fontSize: Dimensions.get('window').width / 20,
        textAlign: 'center',

        padding: 6
    },

    /* Button style */

    btnContainer: {
        width: Dimensions.get('window').width / 2.5,
        height: (Dimensions.get('window').width / 20) * 2.5,
        backgroundColor: colors.def_black,
        padding: 5,
        justifyContent: 'center',
        marginVertical: 6
    },

    btnText:{
        fontFamily: fonts.omnes_semibold,
        fontSize: Dimensions.get('window').width / 20,
        color: 'white',
        textAlign: 'center'
    },

    btnTextAlternative:{
        width: Dimensions.get('window').width / 2.5,
        fontFamily: fonts.omnes_medium,
        fontSize: Dimensions.get('window').width / 25,
        color: 'gray',
        textAlign: 'center'
    },

    /* Textinput style */

    textInput:{
        width: Dimensions.get('window').width / 2,
        height: (Dimensions.get('window').width / 20) * 2.5,
        borderWidth: 2,
        borderColor: colors.def_gray,
        backgroundColor: 'white',

        fontFamily: fonts.omnes_medium,
        textAlign: 'center',
        marginBottom: 5
    }



})

export default Styles