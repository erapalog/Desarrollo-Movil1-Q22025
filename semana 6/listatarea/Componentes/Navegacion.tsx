import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Pages/Home'
import FormularioTarea from '../Pages/FormularioTarea'

export default function Navegacion() {

  const Tab= createBottomTabNavigator()

  return (
   <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}></Tab.Screen>
             <Tab.Screen name='Formulario Tareas' component={FormularioTarea}></Tab.Screen>
        </Tab.Navigator>
   </NavigationContainer>
  )
}