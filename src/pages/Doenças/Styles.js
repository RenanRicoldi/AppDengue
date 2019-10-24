import { StyleSheet, Dimensions } from 'react-native'

const valor = Dimensions.get('screen').width*1.3

const Styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFCB05'
    },
    image:{
        width: valor * 0.74380,
        height: valor,
    }
})

export default Styles