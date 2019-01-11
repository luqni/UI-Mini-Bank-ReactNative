import React,{ Component } from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

export default class DummyComponenet extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.topNavBar}>
                <Button title={'Ke Dashboard'} onPress={()=>{this.props.callBack()}}/>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    topNavBar: {
        height : 100,
        backgroundColor: '#011638',
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
});