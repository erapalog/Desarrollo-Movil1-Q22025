import { View, Text } from 'react-native'
import React from 'react'
import { useAlunoContext } from '../Provider/ProviderAlumno'
import { Alumno } from '../Modelos/Alumno'

export default function InformacionClaseComponent() {

    const {alumno} = useAlunoContext()
  return (
    <View>
      <Text>Nombre del Alumno: {alumno.nombre}</Text>
      <Text>Clase 1: {alumno.clase1}</Text>
      <Text>Clase 2: {alumno.clase2}</Text>
    </View>
  )
}