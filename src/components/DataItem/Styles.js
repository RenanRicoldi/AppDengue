import { StyleSheet, Dimensions } from 'react-native'
import { colors, fonts } from '../../utils/consts'

const itemWidth = Dimensions.get('window').width / 1.2

const Styles = StyleSheet.create({

    date:{
        fontFamily: fonts.omnes_medium,
        textAlign: 'center',
        marginVertical: 4,

        fontSize: Dimensions.get('window').width / 30
    },

    wrapper:{
        width: itemWidth,
        height: 100,
        borderWidth: 3,
        marginBottom: 10,
        borderColor: colors.def_yellow,
        backgroundColor: 'white',

        flexDirection:'row',
        alignItems: 'center',
        alignSelf: 'center'
    },

    icon:{
        width:80,
        height: 80,
        marginHorizontal: 5
    },

    header:{
        width: itemWidth - 94,
        height: 30,
        backgroundColor: colors.def_yellow,

        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonArea:{

        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },

    button:{
        flexDirection:'row',
        alignItems: 'center',
    },

    headerText:{
        fontFamily: fonts.omnes_semibold,
        fontSize: Dimensions.get('window').width / 20
    },

    check:{
        height: 55,
        width: 55,
        borderRadius: 100,
        borderWidth: 3,
        marginHorizontal: 5,
        // borderColor: colors.def_red,
        // backgroundColor: colors.def_red
    },
    
    checkText:{
        fontFamily: fonts.omnes_semibold,
        fontSize: Dimensions.get('window').width / 22,
        textAlign: 'center'
    }

})

export default Styles