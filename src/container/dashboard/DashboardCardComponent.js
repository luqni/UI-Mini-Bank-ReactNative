import React,{ Component } from 'react';
import {StyleSheet, Button, View, Text, Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Icon, Left, Body, Right} from 'native-base';

export default class DashboardCardComponent extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.cardStyle}>
            <Card >
                <CardItem>
                    <Left>
                        {/*<Thumbnail source={{uri: 'https://luqni.github.io/img/profile.jpg'}} />*/}
                        <Image style={styles.logo} source={require('../../../assets/wallet.png')} />
                        <Body>
                        <Text style={{fontSize: 20}}>Balance</Text>
                        <Text>Rp 100.000,-</Text>
                        </Body>
                    </Left>
                </CardItem>
            </Card>
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
    logo: {
        height: 100,
        width: 100,
    },
    cardStyle:{
        flex:9,
        margin:10,
    },
});