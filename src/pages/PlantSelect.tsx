import React, {useEffect, useState} from 'react'
import { Text, SafeAreaView, StyleSheet, View , FlatList, ActivityIndicator} from 'react-native'
import { EnvironmentButton } from '../components/EnvironmentButton'
import { Header } from '../components/Header'
import { Load } from '../components/Load'
import { PlantCardPrimary } from '../components/PlantCardPrimary'

import api from '../services/api'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface EnvironmentProps{
  key: string;
  title: string;
}
interface PlantsProps{
  name: string;
  photo: string;
  id:number;
  about:string;
  environments: [string];
  frequency: {
    times:number;
    repeat_every:number;
  }

}

export function PlantSelect(){
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([])  
  const [plants, setPlants] = useState<PlantsProps[]>([])
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)
  const [loadedAll, setLoadedAll] = useState(false)
  const [environmentSelected, setEnvironmentSelected] = useState('all')

   async function fetchPlants(){
      const  {data} = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`)
      if(!data)
        return setLoading(true)
      if(page >1){
        setPlants(oldValue => [...oldValue, ...data])
        setFilteredPlants(oldValue => [...oldValue, ...data])
      }else{
        setPlants(data)
        setFilteredPlants(data)
      }
      
      setLoading(false)
      setLoadingMore(false)
    }
  function handleFetchMore(distance: number){
    if(distance < 1) return;
    setLoadingMore(true)
    setPage(oldValue => oldValue +1)
    fetchPlants()
  }

  function handleEnvironmentSelected(key: string){
    setEnvironmentSelected(key)
    if(key === 'all')
      return setFilteredPlants(plants)
    const filtered = plants.filter((plant => plant.environments.includes(key)))
    setFilteredPlants(filtered)
  }

  useEffect(() =>{
    async function fetchEnvironment(){
      const  {data} = await api.get('plants_environments?_sort=title&_order=asc')
      setEnvironments([{key: 'all',title: 'Todos'},...data])
    }
    fetchEnvironment()
  },[])
  useEffect(() =>{
   
    fetchPlants()
  },[])

  if(loading)
    return <Load/>
  return (
    <View style={styles.container} >
      <View style={styles.header} >
         <Header/>
      <Text style={styles.title}>Em qual ambiente</Text>
      <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
      <View style={{paddingTop: 10}} >
          <FlatList
            data={environments}
            keyExtractor={(item) => String(item.key)}

            renderItem={({item}) => (<EnvironmentButton title={item.title}   active={item.key === environmentSelected} 
              onPress={() => handleEnvironmentSelected(item.key)} />)}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.environmentList}
          />
      </View>
      <View style={styles.plants} >
        <FlatList 
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => <PlantCardPrimary data={item}
          />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
            onEndReached={({distanceFromEnd}) => handleFetchMore(distanceFromEnd)}
          ListFooterComponent={ loadingMore ? <ActivityIndicator color={colors.green_dark}/> : <></> }
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
  contentContainerStyle:{
    justifyContent: 'center'
  },
  title: {
    color: colors.heading,
    fontSize: 17,
    fontFamily: fonts.heading,
    lineHeight:20,
    marginTop:15

  },
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center'
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