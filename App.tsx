import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Welcome } from './src/pages/Welcome';
import {useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'
export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular, Jost_600SemiBold
  })
  if(fontsLoaded)
  return (
      <Welcome/>
  );
}


