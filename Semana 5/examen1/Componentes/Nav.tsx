import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Inicio from './pages/Inicio'
import Transferencias from './pages/Transferencias'
import Historial from './pages/Historial'

export default function Nav() {

  const navegacion= createBottomTabNavigator()

  return (
    <NavigationContainer>
      <navegacion.Navigator initialRouteName='Inicio'>
        <navegacion.Screen name='Inicio' component={Inicio}></navegacion.Screen>
        <navegacion.Screen name='Transferencia' component={Transferencias}></navegacion.Screen>
        <navegacion.Screen name='Historico' component={Historial}></navegacion.Screen>
      </navegacion.Navigator>
    </NavigationContainer>
  )
}