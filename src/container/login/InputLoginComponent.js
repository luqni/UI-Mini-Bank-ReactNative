import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Image} from 'react-native';


export  default class InputLoginComponent extends Component{
    constructor(props){
        super(props)

    }

    render() {
        return(

            <KeyboardAvoidingView behavior="padding" style={styles.form}>


                <Image  source={{uri:'http://aboutreact.com/wp-content/uploads/2018/08/user.png',}} style={styles.ImageStyle} />
                <TextInput style = {styles.input}

                           placeholder = "Username"
                           placeholderTextColor = "#fff"
                           autoCapitalize = "none"


                           />




                <TextInput style = {styles.input}

                           placeholder = "Password"
                           placeholderTextColor = "#bfff"
                           autoCapitalize = "none"
                           />


                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {()=> this.props.callBackNavigator()
                    }>
                    <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        );
    }
}
const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        borderColor: '#ffff',
        borderWidth: 1,
        width:270,
        padding: 9,
        borderRadius:10,
        elevation: 1.5,
        shadowColor: '#000000'

    },
    submitButton: {
        backgroundColor: '#1070ba',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius:15,
        elevation: 10,
        shadowColor: '#000000'
    },
    submitButtonText:{
        color: 'white',
        textAlign: 'center',


    },
    paragraph: {
        margin: 20,
        fontSize: 10,
        fontWeight: 'bold',
    },
    form: {



    },
    logocustom: {
        paddingBottom: 900
    }



});