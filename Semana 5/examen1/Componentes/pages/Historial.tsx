import { View, Text } from 'react-native'
import React from 'react'
import ListaMovimientos from '../utils/ListaMovimientos'

function sumar(a:number, b:number){
  return a+b
}

export default function Historial() {


  return (
    <View>
      <Text>Historial de transaciones {sumar(2,2)}</Text>
      <ListaMovimientos></ListaMovimientos>
    </View>
  )
}