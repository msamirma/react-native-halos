import React, { Component } from "react";
import ReactNative from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";

//import {App} from './App';
import Dimensions from "Dimensions";

import ImageTypes from "../components/ImageTypes";

var ProfileScreen = require("../screens/ProfileScreen");
var LoginScreen = require("../screens/LoginScreen");

const {
  View,
  Text,
  TouchableHighlight,
  Button,
  StyleSheet,
  Image,
  ImageBackground
} = ReactNative;

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
      tabBarLabel: "Profile"
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
  App: {
    screen: AppNavigator, // Should be "App"
    navigationOptions: {
      title: "Play!",
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

  container: {
    height: 350,
    width: 350,
    backgroundColor: "#f21859"
  },
  tabBarIcon: {
    width: 35,
    height: 35,
    backgroundColor: "#c00ffe"
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

module.exports = EntryPoint;
