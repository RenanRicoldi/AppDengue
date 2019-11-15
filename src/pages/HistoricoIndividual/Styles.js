import { StyleSheet, Dimensions } from 'react-native'
import { colors, fonts } from '../../utils/consts'

export const headerHeight = Dimensions.get('window').height / 3.8

const dotRadius = Dimensions.get('window').width / 24 

const Styles = StyleSheet.create({

    headerWrapper:{
        height: headerHeight - 5,
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

    rec1:{
        width: Dimensions.get("window").width / 1.7,
        height: headerHeight,
        marginTop: -headerHeight/1.5,
        borderColor: colors.def_yellow,
        borderWidth: 4
    },

    rec2:{
        position:'absolute',
        right: Dimensions.get("window").width / 2,
        width: Dimensions.get("window").width ,
        height: Dimensions.get("window").height / 4,
        marginTop: -4,
        borderColor: colors.def_yellow,
        borderWidth: 4,
      //  backgroundColor: 'red'
    },

    title:{

        fontFamily: fonts.rami_bold,
        fontSize: Dimensions.get('window').width / 10,

        //position: 'absolute',
        bottom: -30,
        left: 50

    },

    dot:{
        height: dotRadius,
        width: dotRadius,
        borderRadius: 100,
        borderWidth: 1,
        backgroundColor: colors.def_yellow,
        marginHorizontal: 3,
        marginTop: 4
    },

    swiper:{
        height: Dimensions.get('window').height - (headerHeight*1.1),
        paddingBottom: Dimensions.get('window').width / 15
    },

    emptyWarning:{
        fontFamily: fonts.omnes_semibold,
        fontSize: Dimensions.get('window').width / 18,

     //   alignSelf: 'center'
    }

})

export default Styles