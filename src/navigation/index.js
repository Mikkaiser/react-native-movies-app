import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Pages/Home';
import SignUp from '../Pages/SignUp';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

const style = StyleSheet.create({
  navigationRouteBar: {
    backgroundColor: '#000'
  }
});