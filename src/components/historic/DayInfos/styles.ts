import {StyleSheet} from 'react-native';
import Colors from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 30,
  },
  imcBorder: {
    width: 180,
    height: 180,
    borderRadius: 150,
    borderWidth: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imcValue: {
    fontSize: 56,
    fontWeight: '300',
  },
  imcAvaliation: {
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
    width: 150,
  },
  labels: {
    justifyContent: 'center',
  },
  label: {
    color: Colors.white,
    fontSize: 40,
  },
  dayLabel: {
    color: Colors.asphaltDark,
    fontSize: 20,
    fontStyle: 'italic',
  },
});

export default styles;