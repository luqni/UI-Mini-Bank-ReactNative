import React,{ Component } from 'react';
import {StyleSheet, Button, View, Text, Image} from 'react-native';

export default class LogoLogin extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View >
                <Image style={styles.contentComponent} source={require('../../../assets/src_image_LogoJenius.png')}/>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    contentComponent:{

        marginLeft:90,
        borderRadius:100,
        marginBottom:10,
        width:100,
        height:100,
        backgroundColor:'#fff',
        shadowColor: '#0000',





    },
});