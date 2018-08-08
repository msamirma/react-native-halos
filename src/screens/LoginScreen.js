import React, { Component } from "react";
import ReactNative from "react-native";

//import {App} from './App';
import Dimensions from "Dimensions";

import { RkButton } from "react-native-ui-kitten";

const {
  View,
  Text,
  TouchableHighlight,
  Button,
  StyleSheet,
  ImageBackground,
  Image
} = ReactNative;

let halosBackground = require("../assets/halos-mobile-background.jpg");
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
        <View style={styles.mainContainer}>
          <View>
            <RkButton
              style={styles.button}
              onPress={() => {
                navigate("App");
              }}
            >
              Login
            </RkButton>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

let Window = Dimensions.get("window");
let windowWidth = Window.width;
let windowHeight = Window.height;

let styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center"
  },
  button: {
    backgroundColor: "#c00ffe"
  },
  header: {
    marginTop: 50,
    height: 30,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#c00ffe"
  },
  backGroundImage: {
    flex: 1
  },
  playbutton: {
    marginTop: 50,
    height: windowWidth / 8,
    width: windowWidth / 3,
    alignItems: "center"
    //backgroundColor:'#2c3e50'
  }
});

module.exports = HomeScreen;
