import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface EnvironmentButtonProps extends RectButtonProps{
  title: string;
  active?: boolean;

}


export function EnvironmentButton({title, active=false, ...rest}:EnvironmentButtonProps){
  return (
    <RectButton
      style={[styles.container, active && styles.containerActive]}
      {...rest}
    
    >
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </RectButton>
  )
}
const styles = StyleSheet.create({
  container:{
    height: 40,
    width:76,
    borderRadius: 12,
    backgroundColor: colors.shape,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    
  },
  containerActive: {
    color: colors.green,
    backgroundColor: colors.green_light

  },
  text:{
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading
  },
  textActive: {
        fontFamily: fonts.heading,

  color: colors.green_dark,
  },
})