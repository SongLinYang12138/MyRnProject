/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


// const billDetail = new TabNavigator(
//     {
//         BillDetails: {screen: BillDetails},
//         BillTrack: {screen: BillTrack}
//     },
//     {
//         lazy: true,
//         swipeEnabled: false,
//         backBehavior: "initialRoute",
//         tabBarPosition: "top",
//         tabBarOptions: {
//             activeTintColor: ResourceStyle.orange,
//             activeBackgroundColor: "#fff",
//             inactiveTintColor: ResourceStyle.gray,
//             inactiveBackgroundColor: ResourceStyle.lightGray,
//
//             labelStyle: {
//                 fontSize: 14,
//                 lineHeight: isIOS ? 40 : undefined
//             },
//
//             style: {
//                 backgroundColor: "white",
//                 height: 40
//             },
//
//             indicatorStyle: {
//                 backgroundColor: ResourceStyle.orange
//             }
//         }
//     }
// );


/*
const App = new StackNavigator(
    //所有页面在此注册
    {
        Start: {
            screen: StartApp
        },
        Main: {
            screen: TabContainer,
            navigationOptions: {
                headerLeft: null,
                gesturesEnabled: false
            }
        },
    },
    {
        headerMode: "screen",
        navigationOptions: {
            headerStyle: {
                // height: 40,
                backgroundColor: "#f49826",
                elevation: 0,
                shadowOpacity: 0
            },
            headerTitleStyle: {
                color: "#fff",
                fontSize: 16,
                alignSelf: "center"
            },
            headerTintColor: "#fff",
            gesturesEnabled: true
        }
    }
);
*/
