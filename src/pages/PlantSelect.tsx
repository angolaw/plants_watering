import React from 'react'
import { Text, SafeAreaView, StyleSheet, View , Image} from 'react-native'
import { Header } from '../components/Header'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function PlantSelect(){
  return (
    <View style={styles.container} >
      <View style={styles.header} >
         <Header/>
      <Text style={styles.title}>Em qual ambiente</Text>
      <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.background
  },
  title: {
    color: colors.heading,
    fontSize: 17,
    fontFamily: fonts.heading,
    lineHeight:20,
    marginTop:15

  },
   header:{
      paddingHorizontal: 30,
  },
  subtitle:{
    color: colors.body_light,
    fontSize: 17,
    fontFamily: fonts.text,
    lineHeight: 20,
  }
  
})