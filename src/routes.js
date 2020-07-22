import React from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from './styles/colors';

const Stack = createStackNavigator();

import Main from './pages/Main';
import Historic from './pages/Historic';

const AppScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Main'}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Historic" component={Historic} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
       <StatusBar barStyle="light-content" backgroundColor={Colors.blueDark} />
      <AppScreens />
    </NavigationContainer>
  );
};

export default Routes;
