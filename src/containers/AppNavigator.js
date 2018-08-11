import React from 'react';
import ReactNative from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import ImageTypes from '../data/ImageTypes';
import DrivingScreen from '../screens/Driving/Main';
import LoginScreen from '../screens/Login/Main';
import SignupScreen from '../screens/Signup';
import styles from './styles';

const {
  Image
} = ReactNative;


export const Profile = ({ navigation, screenProps }) => {
  return <DrivingScreen navigation={navigation} screenProps={screenProps} />;
};

export const Login = ({ navigation, screenProps }) => {
  return <LoginScreen navigation={navigation} screenProps={screenProps} />;
};

export const Signup = ({ navigation, screenProps }) => {
  return <SignupScreen navigation={navigation} screenProps={screenProps} />;
};

const ProfileNavigator = createStackNavigator({
  Root: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile'
      //header: null
    }
  }
});

const DataNavigator = createStackNavigator({
  Root: {
    screen: Login,
    navigationOptions: {
      title: 'Data'
      //header: null
    }
  }
});

export const AppNavigator = createBottomTabNavigator({
  MainTab: {
    screen: ProfileNavigator,
    navigationOptions: {
      title: 'Profile',
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={ImageTypes.TAB_PROFILE}
          style={[styles.tabBarIcon, { tintColor: tintColor }]}
        />
      )
    }
  },
  Driving: {
    screen: DataNavigator,
    navigationOptions: {
      title: 'Driving',
      tabBarLabel: 'Driving',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={ImageTypes.TAB_DRIVING}
          style={[styles.tabBarIcon, { tintColor: tintColor }]}
        />
      )
    }
  },
  Settings: {
    screen: DataNavigator,
    navigationOptions: {
      title: 'Settings',
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={ImageTypes.TAB_SETTINGS}
          style={[styles.tabBarIcon, { tintColor: tintColor }]}
        />
      )
    }
  }
});
