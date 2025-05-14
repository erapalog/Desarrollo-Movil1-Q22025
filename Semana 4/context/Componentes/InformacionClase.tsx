import { View, Text } from 'react-native'
import React from 'react'
import {Alumno} from '../Modelos/Alumno'

export default function InformacionClase(props: Alumno) {
  return (
    <View>
      <Text>Nombre Alumno: {props.nombre} </Text>
      <Text>Clase  1: {props.clase1} </Text>
      <Text>Clase  2: {props.clase2} </Text>
    </View>
  )
}