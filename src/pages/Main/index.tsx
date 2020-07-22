import React, {useState, useEffect} from 'react';
import {Platform, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Imc from '../../components/main/Imc';
import Slider from '@react-native-community/slider';
import {storeImc, getClassification, calculate} from '../../services/imc';
import styles from './styles'
import {
  purchased,
  requestPurschase,
  fetchAvailableProducts,
  purchaseUpdateSubscription,
} from '../../services/purchase';
import Header from '../../components/Header'
import Colors from '../../styles/colors';

const itemSubs: any = Platform.select({
  android: [
    'android.test.purchased',
    'android.test.canceled',
    'android.test.refunded',
    'android.test.item_unavailable',
  ],
});

const defaultProductId = 'android.test.purchased';

const Main = ({navigation}: any) => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [imc, setImc] = useState<number>(0);
  const [imcAvaliation, setImcAvaliation] = useState<string>('Indeterminado');
  const [imcAvaliationColor, setImcAvaliationColor] = useState<{}>(Colors.carbon);

  useEffect(() => {
    fetchAvailableProducts(itemSubs);
  }, []);

  useEffect(() => {
    purchaseUpdateSubscription();
  }, []);

  const onRegisterClick = async () => {
    if (await purchased(defaultProductId)) {
      await storeImc({
        imc,
        classification: imcAvaliation,
        color: imcAvaliationColor,
        height,
        weight,
      });
      navigation.navigate('Historic');
    } else {
      requestPurschase(defaultProductId);
    }
   
    
  };

  const onHistoricPress = async () => {
    if (await purchased(defaultProductId)) {
    navigation.navigate('Historic');
    } else {
      requestPurschase(defaultProductId);
    }
  };

  const imcClassification = (val: any) => {
    const {classification, classificationColor} = getClassification(val);
    setImcAvaliation(classification);
    setImcAvaliationColor(classificationColor);
  };

  const imcCalculate = () => {
    const calculated = calculate(weight, height);
    setImc(calculated);
    imcClassification(calculated);
  };

  return (
    <>
    <Header />
    <ScrollView>
    <View style={styles.container}>
      <Imc
        value={imc}
        avaliationColor={imcAvaliationColor}
        avaliation={imcAvaliation}
      />
      <Text style={styles.label}>Seu Peso</Text>
      <View style={styles.weightContainer}>
        <Text style={styles.sliderValue}>{weight} Kg</Text>
        <Slider
          style={{width: 279}}
          minimumValue={0}
          maximumValue={200}
          minimumTrackTintColor={Colors.blue}
          maximumTrackTintColor={Colors.black}
          thumbTintColor={Colors.blue}
          onValueChange={(v:number) => setWeight(v)}
          onSlidingComplete={(_:number) => imcCalculate()}
          value={weight}
          step={1}
        />
      </View>
      <Text style={styles.label}>Sua Altura</Text>
      <View style={styles.weightContainer}>
        <Text style={styles.sliderValue}>{height} m</Text>
        <Slider
          style={{width: 279}}
          minimumValue={0}
          maximumValue={2.5}
          minimumTrackTintColor={Colors.blue}
          maximumTrackTintColor={Colors.black}
          thumbTintColor={Colors.blue}
          onValueChange={(v: number) => setHeight(Number(v.toFixed(2)))}
          onSlidingComplete={(_: number) => imcCalculate()}
          value={parseFloat(String(height))}
          step={0.01}
        />
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={onRegisterClick}>
        <Text style={styles.registerButtonText}>Registrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onHistoricPress}>
        <Text style={styles.historicButtonText}>Histórico</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </>
  );
};

export default Main;
