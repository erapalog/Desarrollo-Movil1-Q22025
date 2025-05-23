import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Pages/Home'
import Persona from '../Pages/Persona'
import Detalle from '../Pages/Detalle'
import Juego from '../Pages/Juego'
import JuegosProvider from '../Provider/JuegosProvider'

export default function TabNavegacion() {

    const Tab = createBottomTabNavigator()
  return (
   
    <JuegosProvider>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home}></Tab.Screen>
                <Tab.Screen name='Persona' component={Persona}></Tab.Screen>
                <Tab.Screen name='Jugar' component={Juego}></Tab.Screen>
            </Tab.Navigator>
    </JuegosProvider>
  
  )
}