import React from 'react';
import ReactNative from 'react-native';

//import {App} from './App';
import Dimensions from 'Dimensions';

import { RkButton, RkTextInput, RkTheme } from 'react-native-ui-kitten';

const {
  View,
  Text,
  TouchableHighlight,
  Button,
  StyleSheet,
  ImageBackground,
  Image
} = ReactNative;

let halosBackground = require('../assets/halos-mobile-background.png');
let halosLogo = require('../assets/halos-logo.png');

const Window = Dimensions.get('window');
const windowWidth = Window.width;
const windowHeight = Window.height;

const colored = false;

const clear = '#ffffff00';
const grey = colored ? '#6b6b6b' : clear;
const blue = colored ? '#828cff' : clear;
const red = colored ? '#c6356d' : clear;
const yellow = colored ? '#fffb49' : clear;
const orange = colored ? '#ff9b21' : clear;
const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 30,
    height: 60,
    width: '100%',
    backgroundColor: blue
  },
  headerLogo: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: '100%',
    backgroundColor: grey
  },
  mainContainer: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: orange
  },
  textInputs: {
    width: '80%',
    backgroundColor: red
  },
  actionButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: blue,
    justifyContent: 'center'
  },
  backGroundImage: {
    flex: 1
  },
  loginWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: yellow,
    height: windowHeight / 3
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#ffffff30',
    borderRadius: 10
  }
});
const HomeScreen = ({ navigation }) => (
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
              navigation.navigate('App');
            }}
          >
            Login
          </RkButton>
          <RkButton
            style={styles.actionButton}
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
            Sign Up
          </RkButton>
        </View>
      </View>
    </View>
  </ImageBackground>
);

// NOTE:This is how you customize Kitten components. Here I'm setting the
// placeHolderTextColor to white. See documentation for other props.
RkTheme.setType('RkTextInput', 'loginField', {
  placeholderTextColor: 'white'
});

module.exports = HomeScreen;
