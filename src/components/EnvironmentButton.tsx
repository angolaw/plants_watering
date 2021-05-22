import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import colors from '../styles/colors'

interface EnvironmentButtonProps extends RectButtonProps{
  title: string;
  active?: boolean;

}


export function EnvironmentButton({title, active=false, ...rest}:EnvironmentButtonProps){
  return (
    <RectButton
      style={styles.button}
      {...rest}
    
    >
      <Text>{title}</Text>
    </RectButton>
  )
}
const styles = StyleSheet.create({
  button:{

  }
})