import {StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('screen').width

const valor = width/6

const Styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    terms:{        
        backgroundColor: '#FFCB05',
        width: width/1.3,
        height: Dimensions.get('screen').height/1.3,
        paddingHorizontal:valor/4,
        paddingTop:Dimensions.get('screen').height/60,
        borderBottomLeftRadius:width/50,
        borderBottomRightRadius:width/50,
        borderTopRightRadius:width/50,
    },
    termText:{
        justifyContent:'center'
    },
   
})

export default Styles