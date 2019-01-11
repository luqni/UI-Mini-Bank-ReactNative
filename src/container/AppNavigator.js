import React from 'react'
import { createStackNavigator, createAppContainer} from 'react-navigation'
import LoginContainer from './login/LoginContainer';
import DashboardContainer from './dashboard/DashboardContainer';
import HistoryContainer from "./history/HistoryContainer";
import TransactionContainer from "./transaction/TransactionContainer";


const AppStack  = createStackNavigator(
    {
        LoginScreen : {
            screen : LoginContainer,
            headerMode: 'none',
            navigationOptions:()=> ({
                header:null
            })
        },
        DashboardScreen : {
            screen : DashboardContainer,
            headerMode: 'none',
            navigationOptions:()=> ({
                header:null
            })
        },
        HistoryScreen : {
            screen : HistoryContainer
        },
        TransactionScreen : {
            screen : TransactionContainer
        }

    },
    {
        initialRouteName: 'LoginScreen'
    }
)

const AppNavigator = createAppContainer(AppStack)
export default AppNavigator;