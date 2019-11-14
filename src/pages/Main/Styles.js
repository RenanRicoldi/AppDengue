import { StyleSheet, Dimensions } from 'react-native'
import { colors ,fonts} from '../../utils/consts'

const valor = Dimensions.get('screen').width*1.3
export const headerHeight = Dimensions.get('window').height / 3.8

const Styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: colors.def_white
    },
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
        fontSize: Dimensions.get('window').width / 10,

        position: 'absolute',
        top: headerHeight - (Dimensions.get('window').width / 10) - 16,
        right: 10

    },

    rec1:{
        width: Dimensions.get("window").width / 2.3,
        height: headerHeight,
        marginTop: -4,
        borderColor: colors.def_yellow,
        borderWidth: 4
    },

    rec2:{
        position:'absolute',
        right: Dimensions.get("window").width / 8,
        bottom: headerHeight / 4.5,
        width: Dimensions.get("window").width ,
        height: headerHeight,
        borderColor: colors.def_yellow,
        borderWidth: 4,
      //  backgroundColor: 'red'
    },
    
})

export default Styles