import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native'
import colors from '../styles/colors'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

export function Header(){
  return (
    <View style={styles.container} >
        <View>
          <Text>Olá,</Text>
          <Text>Willian</Text>
        </View>
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



  }
})