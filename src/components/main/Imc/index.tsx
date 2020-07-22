import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles'

const Imc = ({value, avaliationColor, avaliation}) => {
  return (
    <View style={[styles.imcBorder, {borderColor: avaliationColor}]}>
      <Text style={[styles.imcValue, {color: avaliationColor}]}>{value}</Text>
      <Text style={[styles.imcAvaliation, {color: avaliationColor}]}>
        {avaliation}
      </Text>
    </View>
  );
};

export default Imc;
