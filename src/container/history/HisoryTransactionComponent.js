import React,{ Component } from 'react';
import {StyleSheet, Button, View, Text, Image, ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Icon, Left, Body, Right} from 'native-base';

export default class HisoryTransactionComponent extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.cardStyle}>
                <ScrollView>
                    <Card >
                        <CardItem>
                            <Left>
                                {/*<Thumbnail source={{uri: 'https://luqni.github.io/img/profile.jpg'}} />*/}
                                <Image style={styles.logo} source={require('../../../assets/plusplus.png')} />
                                <Body>
                                <Text>Balance</Text>
                                <Text>Rp 100.000,-</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem>
                            <Left>
                                {/*<Thumbnail source={{uri: 'https://luqni.github.io/img/profile.jpg'}} />*/}
                                <Image style={styles.logo} source={require('../../../assets/minmin.png')} />
                                <Body>
                                <Text>Balance</Text>
                                <Text>Rp 100.000,-</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card >
                    <CardItem>
                        <Left>
                            {/*<Thumbnail source={{uri: 'https://luqni.github.io/img/profile.jpg'}} />*/}
                            <Image style={styles.logo} source={require('../../../assets/plusplus.png')} />
                            <Body>
                            <Text>Balance</Text>
                            <Text>Rp 100.000,-</Text>
                            </Body>
                        </Left>
                    </CardItem>
                </Card>
                    <Card >
                        <CardItem>
                            <Left>
                                {/*<Thumbnail source={{uri: 'https://luqni.github.io/img/profile.jpg'}} />*/}
                                <Image style={styles.logo} source={require('../../../assets/minmin.png')} />
                                <Body>
                                <Text>Balance</Text>
                                <Text>Rp 100.000,-</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem>
                            <Left>
                                {/*<Thumbnail source={{uri: 'https://luqni.github.io/img/profile.jpg'}} />*/}
                                <Image style={styles.logo} source={require('../../../assets/plusplus.png')} />
                                <Body>
                                <Text>Balance</Text>
                                <Text>Rp 100.000,-</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem>
                            <Left>
                                {/*<Thumbnail source={{uri: 'https://luqni.github.io/img/profile.jpg'}} />*/}
                                <Image style={styles.logo} source={require('../../../assets/minmin.png')} />
                                <Body>
                                <Text>Balance</Text>
                                <Text>Rp 100.000,-</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem>
                            <Left>
                                {/*<Thumbnail source={{uri: 'https://luqni.github.io/img/profile.jpg'}} />*/}
                                <Image style={styles.logo} source={require('../../../assets/plusplus.png')} />
                                <Body>
                                <Text>Balance</Text>
                                <Text>Rp 100.000,-</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem>
                            <Left>
                                {/*<Thumbnail source={{uri: 'https://luqni.github.io/img/profile.jpg'}} />*/}
                                <Image style={styles.logo} source={require('../../../assets/minmin.png')} />
                                <Body>
                                <Text>Balance</Text>
                                <Text>Rp 100.000,-</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                </ScrollView>
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
        height: 50,
        width: 50,
    },
    cardStyle:{
        margin:10,
    },
});