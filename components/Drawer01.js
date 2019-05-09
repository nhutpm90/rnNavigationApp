import React, { Component } from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Icon from "react-native-vector-icons/Ionicons";


import TabScreen from './Tab01';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#2ecc71" }}>
        <Text>Home Screen Content</Text>
      </View>
    );
  }
}

class PaymentScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#9b59b6" }}>
        <Text>Payment Screen Content</Text>
      </View>
    );
  }
}

class SettingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#3498db" }}>
        <Text>Setting Screen Content</Text>
      </View>
    );
  }
}

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./icons/drawer.png')}
            style={{ width: 24, height: 24, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home Title',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const PaymentStackNavigator = createStackNavigator({
  Payment: {
    screen: PaymentScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Payment Title',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SettingStackNavigator = createStackNavigator({
  Setting: {
    screen: SettingScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Setting Title',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorExample = createDrawerNavigator({
  Screen1: {
    screen: HomeStackNavigator,
    navigationOptions: {
      drawerLabel: 'Home Menu',
    },
  },

  Screen2: {
    //Title
    screen: PaymentStackNavigator,
    navigationOptions: {
      drawerLabel: 'Payment Menu',
    },
  },

  Screen3: {
    //Title
    screen: SettingStackNavigator,
    navigationOptions: {
      drawerLabel: 'Setting Menu',
    },
  },
});

export default createAppContainer(DrawerNavigatorExample);
