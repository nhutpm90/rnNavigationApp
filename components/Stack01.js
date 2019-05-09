import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: 'Home Screen',
    };
  };

  render() {
    const param = {
      itemId: 86,
      otherParam: 'Home parameters',
    };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2ecc71', }}>
        <Text>Home Screen</Text>
        <Button title="go to History Screen"
          onPress={() => {
            this.props.navigation.navigate('History', param);
          }}
        />
      </View>
    );
  }
}

class HistoryScreen extends React.Component {
  render() {
    const { navigation } = this.props;

    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    console.log('params:: ' + JSON.stringify(navigation.state));
    console.log(itemId + ' - ' + otherParam);
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e67e22', }}>
        <Text>Params: {JSON.stringify(navigation.state)}</Text>
        <Text>History Screen</Text>
      </View>
    );
  }
}

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      // navigationOptions: {
      //   title: HomeScreen,
      // }
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: {
        title: 'History',
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(MainStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}