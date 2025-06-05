import { View, Text } from 'react-native'
import React from 'react'
import ListaMovimientos from '../utils/ListaMovimientos'


export default function Historial() {


  return (
    <View>
      <Text>Historial de transaciones</Text>
      <ListaMovimientos></ListaMovimientos>
    </View>
  )
}