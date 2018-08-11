import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>
          Settings
        </Text>
      </View>
    );
  }
}