// import libs for making component
import React from 'react';
import {Text, View} from 'react-native';

//make component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

//styling
const styles = {
    viewStyle: {
        backgroundColor: '#f3f8f8',
        justifyContent: 'center', //vertical
        alignItems: 'center', //horizontal
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

//make component available to other parts of the app
export {Header};
