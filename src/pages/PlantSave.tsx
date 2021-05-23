import React from 'react'
import { Text, View, StyleSheet, Alert, Image, ScrollView, Platform, TouchableOpacity } from 'react-native'
import {SvgFromUri} from 'react-native-svg'
import fonts from '../styles/fonts'
import WaterDrop from '../assets/waterdrop.png'
import { Button } from '../components/Button'
import colors from '../styles/colors'
export function PlantSave(){
  return (
    <View style={styles.container}>
      <View style={styles.plantInfo} >
        <SvgFromUri
          uri=""
          height={150}
          width={150}
        />
        <Text style={styles.plantName} >Nome da planta</Text>
        <Text style={styles.plantAbout} > 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Sunt, molestiae? Neque suscipit quam libero ipsum ipsam. 
          Quaerat neque voluptatem autem ipsam tempore maiores suscipit cumque quibusdam quia illo.
          Excepturi, hic. 
        </Text>
    </View>
    <View style={styles.controller} >
        <View style={styles.tipContainer} >
          <Image source={WaterDrop} style={styles.tipImage} />
          <Text style={styles.tipText} > lorem ipsum dolor sit amet consectetur</Text>
        </View>
        <Text style={styles.alertLabel} >Escolha o melhor horário para ser lembrado</Text>
        <Button onPress={() => {}} title="Cadastrar" />
    </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape
    
  },
  plantInfo: {

  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 32,
    lineHeight: 40
  },
  plantAbout: {
    fontFamily: fonts.text, 
    fontSize: 20
  },
  controller: {

  },
  tipContainer: {

  },
  tipImage: {

  },
  tipText: {

  },
  alertLabel: {

  }
})