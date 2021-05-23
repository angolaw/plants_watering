import React from 'react'
import { Text,View, StyleSheet, Image} from 'react-native'
import { Header } from '../components/Header'
import colors from '../styles/colors'

export function MyPlants(){
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background
  }
})