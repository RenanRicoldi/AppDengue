import {StyleSheet,Dimensions, StatusBar} from 'react-native'
import {colors,fonts} from '../../utils/consts'

export const headerHeight = Dimensions.get('window').height / 3.8

const margin = (StatusBar.currentHeight < 30)? StatusBar.currentHeight:0

const Styles=StyleSheet.create({

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

        //position: 'absolute',
        bottom: -30,
        left: 50

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
        height: Dimensions.get("window").height + 10,
        marginTop: -4,
        borderColor: colors.def_yellow,
        borderWidth: 4,
      //  backgroundColor: 'red'
    },


    button:{
        backgroundColor:colors.def_yellow,
        width:Dimensions.get('screen').width/1.2,
        height:Dimensions.get('screen').height/15,
        marginBottom:Dimensions.get('screen').height/35,
        justifyContent:'center',
        alignItems:'center'
    },

    btnText: {
        fontFamily: fonts.rami_bold,
        fontSize: headerHeight / 5.5
    },

    scrollView:{
        height: Dimensions.get("window").height - headerHeight - margin
    }

})

export default Styles