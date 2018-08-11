import React from 'react';
import ReactNative from 'react-native';
import { RkButton, RkTextInput, RkTheme } from 'react-native-ui-kitten';
import styles from './styles';

const {
  View,
  ImageBackground,
  Image
} = ReactNative;

const halosBackground = require('../../assets/halos-mobile-background.png');
const halosLogo = require('../../assets/halos-logo.png');

const Main = ({ navigation }) => (
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

export default Main;
