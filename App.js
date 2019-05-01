import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

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
            <View style={{flexDirection: 'row'}}>
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
        navigationOptions: ({navigation}) => ({
            title: 'Het advertentiespel',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            headerStyle: {
                backgroundColor: styles.navigation.backgroundColor,
            },
            headerTintColor: styles.navigation.color,
            headerTitleStyle: {
                fontFamily: styles.navigation.fontFamily
            }
        }),
    },
});

const ExplanationScreen = createStackNavigator({
    Second: {
        screen: Explanation,
        navigationOptions: ({navigation}) => ({
            title: 'Uitleg',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            headerStyle: {
                backgroundColor: styles.navigation.backgroundColor,
            },
            headerTintColor: styles.navigation.color,
            headerTitleStyle: {
                fontFamily: styles.navigation.fontFamily
            }
        }),

    },
});

const DrawerNavigatorExample = createDrawerNavigator({
        Spelen: {
            screen: MainScreen,
            navigationOptions: {
                drawerLabel: 'Spelen',
            },
        },

        Uitleg: {
            screen: ExplanationScreen,
            navigationOptions: {
                drawerLabel: 'Uitleg',
            },
        }
    },
    {
        contentOptions: {
            activeTintColor: styles.navigation.borderColor,
            labelStyle: {
                fontFamily: styles.navigation.fontFamily,
            },
        },
    });

export default createAppContainer(DrawerNavigatorExample);
