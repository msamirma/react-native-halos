import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 200,
    justifyContent: 'center',
    backgroundColor: '#2c3e50'
  },
  backGroundImage: {
    width: '100%',
    height: '100%'
    //alignSelf: 'stretch'
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  dropZone: {
    flex: 1,
    height: 100,
    backgroundColor: '#2c3e50'
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    color: '#fff'
  },
  tabBarIcon: {
    width: 35,
    height: 35
  },
  container: {
    height: 350,
    width: 350,
    backgroundColor: '#f21859'
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: '#f21859',
    borderWidth: 5,
    borderColor: '#ffffff'
  }
});

export default styles;
