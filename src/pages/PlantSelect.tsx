import React from 'react'
import { Text, SafeAreaView, StyleSheet, View , Image} from 'react-native'
import { Header } from '../components/Header'
import colors from '../styles/colors'
import fonts from '../styles/fonts'


export function PlantSelect(){
  return (
    <SafeAreaView style={styles.container} >
     <Header/>
      <Text>Selecionar Planta</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,

    backgroundColor: colors.background
  },
  
})