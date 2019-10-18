import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('screen').width

const valor = width/6

const Styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    image:{
        marginLeft: 17,
        marginTop: 30,
        width: valor * 1.64444,
        height: valor,
    },
    terms:{        
        backgroundColor: '#FFCB05',
        width: width/1.3,
        height: width*2.3
    }
})

export default Styles