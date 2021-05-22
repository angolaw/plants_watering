import React from 'react'
import { Text, SafeAreaView, StyleSheet, View , FlatList} from 'react-native'
import { EnvironmentButton } from '../components/EnvironmentButton'
import { Header } from '../components/Header'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function PlantSelect(){
  return (
    <View style={styles.container} >
      <View style={styles.header} >
         <Header/>
      <Text style={styles.title}>Em qual ambiente</Text>
      <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
      <View>
          <FlatList
            data={[1,2,3,4,5]}
            renderItem={({item}) => (<EnvironmentButton title={item} />)}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.environmentList}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.background
  },
  title: {
    color: colors.heading,
    fontSize: 17,
    fontFamily: fonts.heading,
    lineHeight:20,
    marginTop:15

  },
   header:{
      paddingHorizontal: 30,
  },
  subtitle:{
    color: colors.body_light,
    fontSize: 17,
    fontFamily: fonts.text,
    lineHeight: 20,
  },
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom:5,
    marginLeft: 32,
    marginRight: 32,

  }
  
})