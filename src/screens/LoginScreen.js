import React, { Component } from "react";
import ReactNative from "react-native";

//import {App} from './App';
import Dimensions from "Dimensions";

import { RkButton, RkTextInput, RkTheme } from "react-native-ui-kitten";

const {
  View,
  Text,
  TouchableHighlight,
  Button,
  StyleSheet,
  ImageBackground,
  Image
} = ReactNative;

let halosBackground = require("../assets/halos-mobile-background.png");
let halosLogo = require("../assets/halos-logo.png");

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  // FOR TESTING REDUX: <Text> The Red Bean Count Is: {this.props.screenProps.redBeanCount} </Text>
  render() {
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground source={halosBackground} style={styles.backGroundImage}>
        <View style={styles.logoContainer}>
          <Image style={styles.headerLogo} source={halosLogo} />
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.loginWrapper}>
            <RkTextInput
              style={styles.textInputs}
              rkType="loginField"
              placeholder="Username"
            />
            <RkTextInput
              style={styles.textInputs}
              rkType="loginField"
              placeholder="Password"
            />
            <View style={styles.actionButtonsContainer}>
              <RkButton
                style={styles.actionButton}
                onPress={() => {
                  navigate("App");
                }}
              >
                Login
              </RkButton>
              <RkButton
                style={styles.actionButton}
                onPress={() => {
                  navigate("App");
                }}
              >
                Sign Up
              </RkButton>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

let Window = Dimensions.get("window");
let windowWidth = Window.width;
let windowHeight = Window.height;

let colored = false;

let clear = "#ffffff00";
let grey = colored ? "#6b6b6b" : clear;
let blue = colored ? "#828cff" : clear;
let red = colored ? "#c6356d" : clear;
let yellow = colored ? "#fffb49" : clear;
let orange = colored ? "#ff9b21" : clear;

RkTheme.setType("RkTextInput", "loginField", {
  placeholderTextColor: "white"
});

let styles = StyleSheet.create({
  logoContainer: {
    marginTop: 30,
    height: 60,
    width: "100%",
    backgroundColor: blue
  },
  headerLogo: {
    flex: 1,
    alignSelf: "stretch",
    width: undefined,
    height: "100%",
    backgroundColor: grey
  },
  mainContainer: {
    flex: 1,
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: orange
  },
  textInputs: {
    width: "80%",
    backgroundColor: red
  },
  actionButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: blue,
    justifyContent: "center"
  },
  backGroundImage: {
    flex: 1
  },
  loginWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: yellow,
    height: windowHeight / 3
  },
  actionButton: {
    flex: 1,
    backgroundColor: "#ffffff30",
    borderRadius: 10
  }
});

module.exports = HomeScreen;
