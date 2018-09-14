import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


const Button = ({onPress,children}) => {
    const {
        buttonStyle,
        textStyle
    } = styles;
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};
const styles = {
    textStyle:{
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle : {
        flex : 1,
        alignSelf : 'stretch',
        borderRadius : 5,
        borderWidth : 1,
        borderColor : '#007aff',
        backgroundColor : '#fff',
    }
}

export default Button;