import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles'

const DayInfos = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.imcBorder, {borderColor: data.imcAvaliationColor}]}>
        <Text style={[styles.imcValue, {color: data.imcAvaliationColor}]}>
          {data.imc}
        </Text>
        <Text style={[styles.imcAvaliation, {color: data.imcAvaliationColor}]}>
          {data.imcAvaliation}
        </Text>
      </View>
      <View style={styles.labels}>
        <Text style={styles.dayLabel}>Dia {data.day}</Text>
        <Text style={styles.label}>{data.weight} Kg</Text>
        <Text style={styles.label}>{data.height} m</Text>
      </View>
    </View>
  );
};

export default DayInfos;
