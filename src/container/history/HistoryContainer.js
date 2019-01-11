import React,{ Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DummyComponent from "./DummyComponent";
import HisoryTransactionComponent from "./HisoryTransactionComponent";



export default class HistoryContainer extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View>
                {/*<DummyComponent callBack={this.callBackNavigate}/>*/}
                <HisoryTransactionComponent/>

            </View>
        )
    }
    callBackNavigate = () => {
        console.log('pencet');
        this.props.navigation.navigate('DashboardScreen')
    }

}
