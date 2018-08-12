import React, { Component } from 'react';
import ReactNative from 'react-native';

import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import AppNavigator from './AppNavigator';
import LoginScreen from '../screens/Login/Main';
import SignupScreen from '../screens/Signup';

const {
  View,
  Text,
  TouchableHighlight,
  Button,
  StyleSheet,
  Image,
  Icon,
  StatusBar,
  ImageBackground
} = ReactNative;

const Login = ({ navigation, screenProps }) => {
  return <LoginScreen navigation={navigation} screenProps={screenProps} />;
};

const Signup = ({ navigation, screenProps }) => {
  return <SignupScreen navigation={navigation} screenProps={screenProps} />;
};

//This changes the header status icons (the battery and wifi) to white.
StatusBar.setBarStyle('light-content', true);

const stackNavRoutes = {
  Login: {
    screen: Login, // Should Be Login Page
    navigationOptions: {
      title: 'Login',
      header: null
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: 'Signup'
    }
  },
  App: { // After logging in, can use t
    screen: AppNavigator,
    navigationOptions: {
      title: 'App',
      header: null
    }
  }
};

const stackNavConfig = {
  initialRouteName: "Login",
};

const AppContainer = createStackNavigator(
  stackNavRoutes,
  stackNavConfig
);

export default AppContainer;
