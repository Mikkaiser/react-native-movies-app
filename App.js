import React from "react";
import { StyleSheet } from 'react-native';

import StackNavigator from './src/navigation'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <StackNavigator />
    </NavigationContainer>
  )
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1f1f1f',
    card: '#1f1f1f',
    text: '#fff',
  },
  
};