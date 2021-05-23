import React, {useState} from 'react'
import { Text, View, StyleSheet, Alert, Image, ScrollView, Platform, TouchableOpacity, DatePickerIOSComponent, DatePickerIOS } from 'react-native'
import {SvgFromUri} from 'react-native-svg'
import fonts from '../styles/fonts'
import WaterDrop from '../assets/waterdrop.png'
import { Button } from '../components/Button'
import colors from '../styles/colors'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import {useRoute} from '@react-navigation/core'
import DateTimePicker, {Event} from '@react-native-community/datetimepicker'
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

  const [selectedDateTime, setSelectedDateTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')

  function handleChangeTime(event: Event, dateTime: Date | undefined){
    if(Platform.OS === 'android'){
      setShowDatePicker(oldValue => !oldValue)
    }
  }

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
        <DateTimePicker  value={selectedDateTime} mode="time"  display="spinner"  onChange={handleChangeTime} />
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