import React,{ Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LogoLogin from "./LogoLogin";
import InputLoginComponent from "./InputLoginComponent";


export default class LoginContainer extends Component{

    constructor(props){
        super(props)
        this.callBackNavigator = this.callBackNavigator.bind(this)
    }

    callBackNavigator() {
        this.props.navigation.navigate('DashboardScreen')
    }


    render() {
        return (
            <View style={styles.cardlogin}>
                <LogoLogin />
                <InputLoginComponent callBackNavigator={this.callBackNavigator}/>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    cardlogin:{

        marginTop :130,
        marginLeft:30,
        borderRadius:20,
        backgroundColor:'#00abe8',
        paddingTop:20,
        paddingBottom: 12,
        paddingLeft: 5,
        shadowColor: '#000000',
        width:300,
        elevation: 40


    },

});
