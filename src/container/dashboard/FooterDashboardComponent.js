import React,{ Component } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';

export default class FooterDashboardComponent extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.footerContainer}>
                <Footer>
                    <FooterTab style={styles.colorFooter}>
                        {/*<Button vertical>*/}
                            {/*<Icon name="apps" style={styles.justIcon}/>*/}
                            {/*<Text style={styles.justText}>Apps</Text>*/}
                        {/*</Button>*/}
                        {/*<Button vertical>*/}
                            {/*<Icon name="camera" />*/}
                            {/*<Text style={styles.justText}>Camera</Text>*/}
                        {/*</Button>*/}
                        {/*<Button vertical>*/}
                            {/*<Icon active name="navigate" />*/}
                            {/*<Text style={styles.justText}>Navigate</Text>*/}
                        {/*</Button>*/}
                        <Button  vertical onPress={()=>{this.props.callBackTransaction()}}>
                            <Image style={styles.imgIcon} source={require('../../../assets/transfer.png')} />
                        </Button>
                        <Button vertical onPress={()=>{this.props.callBack()}}>
                            <Image style={styles.imgIcon} source={require('../../../assets/history.png')} />
                        </Button>

                    </FooterTab>
                </Footer>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    footerContainer: {
        height : 100,
        flex: 1,
        alignItems:'flex-end',
        justifyContent: 'center',
    },
    colorFooter: {
        backgroundColor:'#fff',
    },
    justText:{
        color: '#fff',
        fontWeight: 'bold',
    },
    justIcon:{
        color: '#fff',
    },
    imgIcon:{
        height: 50,
        width: 50,
    }
});
