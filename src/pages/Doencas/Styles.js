import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('screen').width

const Styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        //backgroundColor: '#FFCB05'
    },
    image:{
        width: width/5,
        height:  width/5*1.648484,
    },
    scroll:{
        alignSelf:'flex-start'
    },
})

export default Styles