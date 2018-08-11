import React, { Component } from 'react';
import ReactNative from 'react-native';

import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { Login, Signup, AppNavigator } from './AppNavigator';

const {
  View,
  Text,
  TouchableHighlight,
  Button,
  StyleSheet,
  Image,
  Icon,
  ImageBackground
} = ReactNative;

const AppContainer = createStackNavigator({
  Root: {
    screen: Login, // Should Be Login Page
    navigationOptions: {
      title: 'Login',
      header: null
    }
  },
  SignUp: {
    screen: Signup,
    navigationOptions: {
      title: 'Sign Up'
    }
  },
  App: { // After logging in, can use t
    screen: AppNavigator,
    navigationOptions: {
      title: 'App',
      header: null
    }
  }
});

export default AppContainer;
