import React, { Component } from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';

import { createStackNavigator, createAppContainer } from "react-navigation";

import Switch01 from './components/Switch01';
import Stack01 from './components/Stack01';
import Stack02 from './components/Stack02';
import Tab01 from './components/Tab01';
import Tab02 from './components/Tab02';
import Drawer01 from './components/Drawer01';
import Drawer02 from './components/Drawer02';

const screens = ["Switch01", "Stack01", "Stack02", "Tab01", "Tab02", "Drawer01", "Drawer02"];

class MainScreen extends React.Component {
  _renderButtons = (screens) => {
    return screens.map((screen, idx) => {
      return (
        <Button key={idx} title={screen} onPress={() => this.props.navigation.navigate(screen)}/>
      );
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#95a5a6" }}>
        <Text>Main</Text>
        { this._renderButtons(screens) }
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  { 
    MainScreen: {
      screen: MainScreen,
    },
    Switch01: {
      screen: Switch01,
    },
    Stack01: {
      screen: Stack01,
    },
    Stack02: {
      screen: Stack02,
    },
    Tab01: {
      screen: Tab01,
    },
    Tab02: {
      screen: Tab02,
    },
    Drawer01: {
      screen: Drawer01,
    },   
    Drawer02: {
      screen: Drawer02,
    },
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none',
  }
)

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
      return <AppContainer />;
  }
}