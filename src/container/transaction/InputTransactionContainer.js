import React, { Component } from 'react';
import {Text, View, StyleSheet, Picker, TextInput, TouchableOpacity} from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: 'Java'
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <Picker
                    style={{width: 200}}
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label="Please Select Bank" value=" " />
                    <Picker.Item label="BRI" value="bri" />
                    <Picker.Item label="BCA" value="bca" />
                    <Picker.Item label="BTPN" value="btpn" />
                    <Picker.Item label="Mandiri" value="mandiri" />
                </Picker>
                <TextInput style = {styles.input}
                           placeholder = "Nomor Rekening"
                           placeholderTextColor = "#b5b5b5"
                           autoCapitalize = "none"
                />
                <TextInput style = {styles.input}
                           placeholder = "Nominal"
                           placeholderTextColor = "#b5b5b5"
                           autoCapitalize = "none"
                />
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {()=> ''
                    }>
                    <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:330,
        // marginLeft:18,
        marginTop:50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ffffff',
        borderRadius:10,
        elevation: 40,
        height: 300


    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#ffff',
        borderWidth: 1,
        width:270,
        padding: 9,
        borderRadius:10,
        elevation: 1.5,
        shadowColor: '#000000',
        marginTop: 3,



    },
    submitButton: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 15,
        width:100,
        borderRadius:10,
        elevation: 5,
        shadowColor: '#000000'
    },
    submitButtonText:{
        color: '#b5b5b5',
        textAlign: 'center',


    },

});
