import React from 'react'
import { View, Text, TextInput, SafeAreaView, StyleSheet} from 'react-native'

export function UserIdentification(){
  return(
    <SafeAreaView style={styles.container} >
      <View style={styles.wrapper} >
        <Text>Como podemos{'\n'} chamar você?</Text>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})