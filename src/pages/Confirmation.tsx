import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { Button } from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'


export function Confirmation(){
  return (
    <SafeAreaView style={styles.container} >
        <View style={styles.content} >
          <Text>{'😇'}</Text>
          <Text>Agora vamos começar a cuidar das suas plantinhas com muito carinho</Text>
        </View>

        <View style={styles.footer}  > 
          <Button title="Começar" />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  }
})
