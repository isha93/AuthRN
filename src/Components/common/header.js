import React from 'react'
import {Text, View} from 'react-native'


const Header = (props) => {
    const {viewStyles, textStyles} = styles
    return (
        <View style={viewStyles}>
            <Text style={textStyles}>{props.judul}</Text>
        </View>
    );
}

const styles = {
    viewStyles : {
        backgroundColor : '#F8F8F8',
        justifyContent : 'center',
        alignItems: 'center',
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.2,
        elevation : 2,
        position:'relative',
        height: 60

    },
    textStyles : {
        fontSize : 20
    }
};

export {Header};