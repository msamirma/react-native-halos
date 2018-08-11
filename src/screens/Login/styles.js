import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';


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

export default styles;
