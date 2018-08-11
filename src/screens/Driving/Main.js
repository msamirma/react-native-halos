import React from 'react';
import { Text, View } from 'react-native';
import { Accelerometer } from 'react-native-sensors';
import styles from './styles';

const Value = ({ name, value }) => (
  <View style={styles.valueContainer}>
    <Text style={styles.valueName}>{name}:</Text>
    <Text style={styles.valueValue}>{new String(value).substr(0, 8)}</Text>
  </View>
);


export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    /*new Accelerometer({
      updateInterval: 400 // defaults to 100ms
    })
      .then(observable => {
        observable.subscribe(({ x, y, z }) => this.setState({ x, y, z }));
      })
      .catch(error => {
        console.log("The sensor is not available");
      });
*/
    this.state = {
      x: 0,
      y: 0,
      z: 0
    };
  }

  render() {
    const { x, y, z } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.headline}>
          Accelerometer values
        </Text>
        <Value name="x" value={x} />
        <Value name="y" value={y} />
        <Value name="z" value={z} />
      </View>
    );
  }
}