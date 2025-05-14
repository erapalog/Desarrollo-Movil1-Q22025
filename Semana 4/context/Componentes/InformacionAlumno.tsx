import { View, Text } from 'react-native'
import React from 'react'
import { Alumno } from '../Modelos/Alumno'

export default function InformacionAlumno(props:Alumno) {
  return (
    <View>
      <Text>Informacin general del alumno</Text>
      <Text>Nombre Alumno: {props.nombre}</Text>
    </View>
  )
}