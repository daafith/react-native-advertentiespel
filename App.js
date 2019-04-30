import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import Game from './components/Game';
import Explanation from './components/Explanation';
import {styles} from "./styles";

class NavigationDrawerStructure extends Component {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Image
                        source={require('./assets/drawer.png')}
                        style={styles.hamburger}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const MainScreen = createStackNavigator({
    First: {
        screen: Game,
        navigationOptions: ({ navigation }) => ({
            title: 'Het advertentiespel',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: styles.navigationHeader.backgroundColor,
            },
            headerTintColor: styles.navigationHeader.color,
            headerTitleStyle: {
                fontFamily: styles.overlayText.fontFamily
            }
        }),
    },
});

const ExplanationScreen = createStackNavigator({
    Second: {
        screen: Explanation,
        navigationOptions: ({ navigation }) => ({
            title: 'Uitleg',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: styles.navigationHeader.backgroundColor,
            },
            headerTintColor: styles.navigationHeader.color,
            headerTitleStyle: {
                fontFamily: styles.overlayText.fontFamily
            }
        }),

    },
});

const DrawerNavigatorExample = createDrawerNavigator({
    Screen1: {
        screen: MainScreen,
        navigationOptions: {
            drawerLabel: 'Spelen',
        },
    },

    Screen2: {
        screen: ExplanationScreen,
        navigationOptions: {
            drawerLabel: 'Uitleg',
        },
    },
});

export default createAppContainer(DrawerNavigatorExample);
