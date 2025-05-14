import { View, Text } from 'react-native'
import React from 'react'
import { useAlunoContext } from '../Provider/ProviderAlumno'

export default function InformacionAlumnoComponent() {

  const {alumno} = useAlunoContext()
  return (
    <View>
      <Text>Nombre ALumno {alumno.nombre}</Text>
    </View>
  )
}