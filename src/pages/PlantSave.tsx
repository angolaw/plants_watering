import React from 'react'
import { Text, View, StyleSheet, Alert, Image, ScrollView, Platform, TouchableOpacity } from 'react-native'
import {SvgFromUri} from 'react-native-svg'
import fonts from '../styles/fonts'
import WaterDrop from '../assets/waterdrop.png'
import { Button } from '../components/Button'
import colors from '../styles/colors'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import {useRoute} from '@react-navigation/core'

interface Params {
  plant: {
     name: string;
    photo: string;
    id:number;
    about:string;
    water_tips: string;
    environments: [string];
    frequency: {
      times:number;
      repeat_every:string;
    }
  }

}


export function PlantSave(){
  const route = useRoute()
  const {plant} = route.params as Params
  const period = plant.frequency.repeat_every == 'week' ? 'semana' : 'dia'
  const times = plant.frequency.times < 2 ? 'vez' : 'vezes'
  return (
    <View style={styles.container}>
      <View style={styles.plantInfo} >
        <SvgFromUri
          uri={plant.photo}
          height={150}
          width={150}
        />
        <Text style={styles.plantName} >{plant.name}</Text>
        <Text style={styles.plantAbout} > 
          {plant.about}
        </Text>
    </View>
    <View style={styles.controller} >
        <View style={styles.tipContainer} >
          <Image source={WaterDrop} style={styles.tipImage} />
          <Text style={styles.tipText} >
            {plant.water_tips}
          </Text>
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
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape

  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    lineHeight: 40,
    color: colors.heading,
    marginTop: 15,
  },
  plantAbout: {
    fontFamily: fonts.text, 
    textAlign: 'center',
    fontSize: 17,
    color: colors.heading,
    marginTop: 10,
  },
  controller: {
    backgroundColor: colors.white,
    paddingHorizontal:20,
    paddingTop: 20,
    paddingBottom: getBottomSpace() || 20,

  },
  tipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    position: 'relative',
    bottom: 60,
    backgroundColor: colors.blue_light,
    padding:20,
  },
  tipImage: {
    height: 56,
    width: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 17,
    textAlign: 'justify',
  }, 
  alertLabel: {
    textAlign: 'center',
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 15,
  }
})