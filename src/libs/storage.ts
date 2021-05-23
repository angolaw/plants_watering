import AsyncStorage from '@react-native-async-storage/async-storage'
import {format} from 'date-fns'

export interface PlantProps{
    name: string;
    photo: string;
    id:number;
    about:string;
    water_tips: string;
    environments: [string];
    frequency: {
      times:number;
      repeat_every:string;
    };
    dateTimeNotification: Date
}