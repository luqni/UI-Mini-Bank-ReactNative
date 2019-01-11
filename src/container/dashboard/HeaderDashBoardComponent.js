import React,{ Component } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Badge, Left, Title,Body,Right } from 'native-base';

export default class HeaderDashBoardComponent extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View>
                <Header style={styles.headerContainer}>
                    <Left>
                        <Button transparent>
                            <Image style={styles.imgIcon} source={{uri: 'https://luqni.github.io/img/profile.jpg'}} />
                            {/*<Icon style={styles.justIcon} name='arrow-back' />*/}
                        </Button>
                    </Left>
                    <Body>
                    {/*<Title style={styles.justText} >Dashboard</Title>*/}
                    </Body>
                    <Right>
                        <Button transparent>
                            {/*<Title style={styles.justText} >Hi Tayo!</Title>*/}
                            <Text style={{fontSize:22, fontWeight: 'bold'}}>Hai Tayo</Text>
                            {/*<Icon style={styles.justIcon} name='menu' />*/}
                        </Button>
                    </Right>
                </Header>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 25,
        backgroundColor:'#fff',
    },
    colorFooter: {
        backgroundColor:'#fff',
    },
    justText:{
        color: '#000'
    },
    justIcon:{
        color: '#000',
    },
    imgIcon:{
        borderRadius:50,
        height: 50,
        width: 50,
    }
});
