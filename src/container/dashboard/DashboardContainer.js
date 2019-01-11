import React,{ Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DummyComponent from './DummyComponent';
import DashboardCardComponent from "./DashboardCardComponent";
import FooterDashboardComponent from "./FooterDashboardComponent";
import HeaderDashBoardComponent from "./HeaderDashBoardComponent";


export default class DashboardContainer extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1}}>
                {/*<DummyComponent callBack={this.callBackNavigate}/>*/}
                <HeaderDashBoardComponent/>
                <DashboardCardComponent/>
                <FooterDashboardComponent callBack={this.callBackNavigate} callBackTransaction={this.callBackTransaction}/>
            </View>
        )
    }
    callBackNavigate = () => {
        console.log('pencet');
        this.props.navigation.navigate('HistoryScreen')
    }
    callBackTransaction = () => {
                    this.props.navigation.navigate('TransactionScreen')
    }

}
