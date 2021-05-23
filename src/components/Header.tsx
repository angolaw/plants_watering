import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native'
import colors from '../styles/colors'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import me from '../assets/will.jpeg'
import fonts from '../styles/fonts'
import AsyncStorage from '@react-native-async-storage/async-storage'
export function Header(){
    const [name, setName] = useState<string>()
      async function loadUserName(){
       const nameSaved =   await AsyncStorage.getItem('@plantmanager:user')
       setName(nameSaved!)
      }
  useEffect(() => {
    loadUserName()
  },[name])
  return (
    <View style={styles.container} >
        <View>
          <Text style={styles.greeting} >Olá,</Text>
          <Text  style={styles.userName}>{name}</Text>
        </View>
        <Image source={me} resizeMode="contain" style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
 
  image: {
    height: 70,
    width: 70,
    borderRadius: 40,

  },
   greeting: {
     fontFamily: fonts.text,
     fontSize: 32,
     color: colors.heading,
     
   },
   userName:{
     fontFamily: fonts.heading,
     fontSize: 32,
     color: colors.heading,
     lineHeight: 40,
   }
})