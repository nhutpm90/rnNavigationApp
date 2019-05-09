import React from "react";
import { Button, View, Text } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
} from 'react-navigation';

import Icon from "react-native-vector-icons/Ionicons";

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#2ecc71" }}>
          <Text>Home Screen</Text>
          <Button title="Settings Screen" onPress={() => { this.props.navigation.navigate("Setting"); }} />
        </View>
      );
    }
}

class PaymentScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#9b59b6" }}>
          <Text>Payment Screen</Text>
          <Button title="Go Back" onPress={() => { this.props.navigation.goBack(); }} />
        </View>
      );
    }
}

class SettingScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#3498db" }}>
          <Text>Setting Screen</Text>
          <Button title="Go Back" onPress={() => { this.props.navigation.goBack(); }} />
        </View>
      );
    }
}

const RootStack = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home",
        tabBarIcon: ({ horizontal, tintColor }) => <Icon name="md-home" size={25} color={tintColor} />
      }
    },
    Payment: {
      screen: PaymentScreen,
      navigationOptions: {
        title: "Payment",
        tabBarIcon: ({ horizontal, tintColor }) => <Icon name="md-book" size={25} color={tintColor} />
      }
    },
    Setting: {
      screen: SettingScreen,
      navigationOptions: {
        title: "Settings",
        tabBarIcon: ({ horizontal, tintColor }) => <Icon name="md-settings" size={25} color={tintColor} />
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'gray',
      // showLabel: false
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}