import React from 'react'
import {View,
        TouchableOpacity,
        Text,
        Dimensions} from 'react-native'
import Styles from './Styles'

class MainButton extends React.Component{

    cornerBottom(){
        if(this.props.corner=='Bottom'){
            return Dimensions.get('screen').width/30
        }else {
            return 0
        }
    }

    cornerTop(){
        if(this.props.corner=='Top'){
            return Dimensions.get('screen').width/30
        }else{
            return 0
        }
    }

    render(){
        return(
            <View style={ Styles.background }>
                <TouchableOpacity style={ [Styles.button,{backgroundColor:this.props.color,borderTopRightRadius: this.cornerTop(),borderBottomRightRadius: this.cornerBottom()}] }>
                    <Text>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default MainButton