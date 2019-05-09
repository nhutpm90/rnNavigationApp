import React from "react";
import { Button, View, Text } from "react-native";
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    const param = {
      itemId: 86,
      otherParam: 'anything you want here',
    };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#2ecc71" }}>
        <Text>Home Screen</Text>
        <Button title="Payment Screen" onPress={() => {
          this.props.navigation.navigate("Payment", param);
        }} />
        <Button title="Setting Screen" onPress={() => {
          this.props.navigation.navigate("Setting");
        }} />
      </View>
    );
  }
}

class PaymentScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const params = navigation.state.params;
    console.log("PaymentScreen:: params:: " + JSON.stringify(params));
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#9b59b6" }}>
        <Text>Payment Screen</Text>
        <Text>Params:: {JSON.stringify(params)}</Text>
        <Button title="Home Screen" onPress={() => {
          this.props.navigation.navigate("Home");
        }} />
        <Button title="Setting Screen" onPress={() => {
          this.props.navigation.navigate("Setting");
        }} />
      </View>
    );
  }
}

class SettingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#3498db" }}>
        <Text>Setting Screen</Text>
        <Button title="Home Screen" onPress={() => {
          this.props.navigation.navigate("Home");
        }} />
        <Button title="Payment Screen" onPress={() => {
          this.props.navigation.navigate("Payment");
        }} />
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  Home: HomeScreen,
  Payment: PaymentScreen,
  Setting: SettingScreen
});

const AppContainer = createAppContainer(AppNavigator); 

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}