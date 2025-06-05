import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Acelerometro from '../pages/Acelerometro'
import Camara from '../pages/Camara'
import Mapas from '../pages/Mapas'
import Locacion from '../pages/Locacion'

export default function NavBar() {

  const tab= createBottomTabNavigator()

  return (
    
    <NavigationContainer>
        <tab.Navigator>
            <tab.Screen name='Acelererometro' component={Acelerometro}></tab.Screen>
            <tab.Screen name='Camara' component={Camara}></tab.Screen>
            <tab.Screen name='Mapas' component={Mapas}></tab.Screen>
            <tab.Screen name='Mi ubicacion' component={Locacion}></tab.Screen>
        </tab.Navigator>
    </NavigationContainer>
  )
}