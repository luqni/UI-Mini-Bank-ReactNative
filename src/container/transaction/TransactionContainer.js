import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import InputTransactionContainer from "./InputTransactionContainer";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <InputTransactionContainer/>
                <Image style={styles.iconKecil} source={require('../../../assets/src_image_LogoJenius.png')}/>
                <Text style={styles.font}>Jenius</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#00abe8',
        height:300,
        elevation: 20,
        alignItems: 'center',


    },
    iconKecil:{
        width:30,
        height: 30,
        marginTop: 100
    },
    font:{
        shadowColor: '#000000',
    }

});