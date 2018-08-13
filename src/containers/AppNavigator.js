import React from 'react';
import ReactNative from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import ImageTypes from '../data/ImageTypes';
import DrivingScreen from '../screens/Driving/Main';
import SettingsScreen from '../screens/Settings/Main';
import styles from './styles';

const {
  Image
} = ReactNative;


const Profile = ({ navigation, screenProps }) => {
  return <DrivingScreen navigation={navigation} screenProps={screenProps} />;
};
const Settings = ({ navigation, screenProps }) => {
  return <SettingsScreen navigation={navigation} screenProps={screenProps} />;
};
const ProfileNavigator = createStackNavigator({
  Root: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
      headerStyle: { backgroundColor: '#1155cc' },
      headerTitleStyle: { color: '#e8edf3' }
    }
  }
});

const DataNavigator = createStackNavigator({
  Root: {
    screen: Profile,
    navigationOptions: {
      title: 'Driving',
      headerStyle: { backgroundColor: '#1155cc' },
      headerTitleStyle: { color: '#e8edf3' }
    }
  }
});
const SettingsNavigator = createStackNavigator({
  Root: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
      headerStyle: { backgroundColor: '#1155cc' },
      headerTitleStyle: { color: '#e8edf3' }
    }
  }
});

const tabNavConfig = {
  tabBarOptions: {
    activeTintColor: '#1155cc',
    labelStyle: {
      fontSize: 11
    }
  }
};
const tabRouteConfig = {
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
    screen: SettingsNavigator,
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
};

const AppNavigator = createBottomTabNavigator(
  tabRouteConfig,
  tabNavConfig
);

export default AppNavigator;
