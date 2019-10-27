import { StyleSheet, Dimensions } from 'react-native'
import { colors, fonts } from '../../utils/consts'

const Styles = StyleSheet.create({

    /* Main container */

    mainContainer:{
        borderColor: colors.def_yellow,
        borderWidth: 3,
        marginLeft: -3,
        width: Dimensions.get('window').width / 1.5,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        marginVertical: 20
    },

    mainContainerOpened:{
        borderColor: colors.def_yellow,
        borderWidth: 3,
        marginLeft: -3,
        width: Dimensions.get('window').width / 1.5,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        marginVertical: 20
    },

    /* Icon and title */

    photoWrapper:{
        borderRadius: 100,
        borderWidth: 3,
        borderColor: colors.def_black,
        height: 80,
        width: 80,
        marginHorizontal: 5
    },

    title:{
        flex: 0.98,
        fontSize: Dimensions.get('window').width / 20,
        fontFamily: fonts.omnes_semibold
    },

    /* Check button */

    checkWrapper:{

        flexDirection:'row',
        alignItems:'center',
        marginHorizontal: 5,
        marginVertical: 5

    },

    checkBtn:{
        height: 55,
        width: 55,
        borderRadius: 100,
        borderWidth: 3
    },

    checkTitle:{

        fontSize: Dimensions.get('window').width / 20,
        fontFamily: fonts.omnes_semibold,
        marginLeft: 5

    }

})

export default Styles