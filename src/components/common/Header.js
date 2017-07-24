import React from 'react'
import {Text, View} from 'react-native'

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
};


const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        backgroundColor: '#01579b',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.8,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        color: 'white',
        fontSize: 20
    }
}


export {Header};

