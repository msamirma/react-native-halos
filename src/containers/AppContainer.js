import React, { Component } from 'react';
import ReactNative from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

//import {App} from './App';
import Dimensions from "Dimensions";

import ImageTypes from '../components/ImageTypes';
import ProfileScreen from '../screens/Profile';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';

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

let styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 200,
    justifyContent: "center",
    backgroundColor: "#2c3e50"
  },
  backGroundImage: {
    width: "100%",
    height: "100%"
    //alignSelf: 'stretch'
  },
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  dropZone: {
    flex: 1,
    height: 100,
    backgroundColor: "#2c3e50"
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff"
  },
  icon: {
    height: 30,
    width: 30
  },
  container: {
    height: 350,
    width: 350,
    backgroundColor: "#f21859"
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: "#f21859",
    borderWidth: 5,
    borderColor: "#ffffff"
  }
});

import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

const Profile = ({ navigation, screenProps }) => {
  return <ProfileScreen navigation={navigation} screenProps={screenProps} />;
};

const Login = ({ navigation, screenProps }) => {
  return <LoginScreen navigation={navigation} screenProps={screenProps} />;
};

const SignUp = ({ navigation, screenProps }) => {
  return <SignupScreen navigation={navigation} screenProps={screenProps} />;
};

const ProfileNavigator = createStackNavigator({
  Root: {
    screen: Profile,
    navigationOptions: {
      title: "Profile"
      //header: null
    }
  }
});

const DataNavigator = createStackNavigator({
  Root: {
    screen: Login,
    navigationOptions: {
      title: "Data"
      //header: null
    }
  }
});

const AppNavigator = createBottomTabNavigator({
  MainTab: {
    screen: ProfileNavigator,
    navigationOptions: {
      title: "Welcome",
      tabBarLabel: "Profile",
      tabBarIcon: (
        <Image source={ImageTypes.PROFILE_TAB_LOGO} style={styles.icon} />
      )
    }
  },
  DataNavigator: {
    screen: DataNavigator,
    navigationOptions: {
      title: "Welcome",
      tabBarLabel: "Data"
    }
  }
});

const EntryPoint = createStackNavigator({
  Root: {
    screen: Login, // Should Be Login
    navigationOptions: {
      title: "Login",
      header: null
    }
  },
  SignUp: {
    screen: SignUp, // Should Be Login
    navigationOptions: {
      title: "Sign Up"
    }
  },
  App: {
    screen: AppNavigator,
    navigationOptions: {
      title: "App",
      header: null
    }
  }
});

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AppNavigator screenProps={this.props} />;
  }
}

module.exports = EntryPoint;
