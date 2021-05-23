import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import { View, Text, TextInput, SafeAreaView, StyleSheet, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback, Alert} from 'react-native'
import { Button } from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import AsyncStorage from '@react-native-async-storage/async-storage'


export function UserIdentification(){

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>()

  function handleInputBlur(){
    setIsFocused(false)
    setIsFilled(!!name)
  }
  function handleInputFocus(){
    setIsFocused(true)
  }
  function handleInputChange(value:string){
    setIsFilled(!!value)
    setName(value)
  }
    const navigation = useNavigation()

  async function handleConfirm(){
    if(!name) return Alert.alert(`Precisamos saber seu nome! 🧐`)
    await AsyncStorage.setItem('@plantmanager:user',name)
    navigation.navigate('Confirmation')
  }
  return(
    <SafeAreaView style={styles.container} >
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
          <View style={styles.wrapper} >
        <View style={styles.form}>
           <Text style={styles.emoji} >{isFilled ? '😄' : '🙃'}</Text>
        <Text style={styles.title} >Como podemos{'\n'} chamar você?</Text>
        <TextInput style={[styles.input, (isFocused || isFilled) && {borderColor:colors.green}]} 
        placeholder="Digite um nome" 
        onBlur={handleInputBlur} 
        onFocus={handleInputFocus}  
        onChangeText={handleInputChange}
        
        />
        <View style={styles.footer}>
                  <Button title="Confirmar" onPress={handleConfirm} />

        </View>
        </View>
      </View>
        </TouchableWithoutFeedback>
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