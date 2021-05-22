import React from 'react'
import {Text, View, Image} from 'react-native'
import watering from '../assets/watering.png'
export function Welcome(){
  return (
    <View>  
      <Text>Gerencie suas Plantas de forma fácil </Text>
      <Image source={watering} />
      <Text>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você, sempre que precisar</Text>
   </View> 
  )
}