import React from 'react'
import { View, Text, TextInput, SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native'
import { Button } from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function UserIdentification(){
  return(
    <SafeAreaView style={styles.container} >
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  >
        <View style={styles.wrapper} >
        <View style={styles.form}>
           <Text style={styles.emoji} >😄</Text>
        <Text style={styles.title} >Como podemos{'\n'} chamar você?</Text>
        <TextInput style={styles.input} placeholder="Digite um nome"  />
        <View style={styles.footer}>
                  <Button title="Confirmar" />

        </View>
        </View>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 44
  },
  wrapper: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
  },
  footer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20,

  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 24,
    lineHeight:32,
    color: colors.heading,
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width:'100%',
    fontSize: 18,
    marginTop:50,
    padding: 10,
    textAlign: 'center',

  }
})