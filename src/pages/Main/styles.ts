import {StyleSheet} from 'react-native';
import Colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.blueDark,
    },
    label: {
      color: Colors.white,
      fontSize: 22,
      lineHeight: 30,
      letterSpacing: -0.17,
      marginTop: 40,
    },
    weightContainer: {
      backgroundColor: Colors.white,
      borderRadius: 8,
      marginTop: 13,
      height: 75,
      width: 320,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sliderValue: {
      fontSize: 37,
      color: Colors.champagneDark,
    },
    registerButton: {
      height: 75,
      width: 320,
      borderRadius: 12,
      marginTop: 54,
      backgroundColor: Colors.blue,
      alignItems: 'center',
      justifyContent: 'center',
    },
    registerButtonText: {
      color: Colors.white,
      fontSize: 22,
      lineHeight: 30,
      letterSpacing: -0.17,
    },
    historicButtonText: {
      color: Colors.white,
      fontSize: 22,
      lineHeight: 30,
      letterSpacing: -0.17,
      fontStyle: 'italic',
      marginTop: 40,
    },
  });

  export default styles;