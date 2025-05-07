import { View, Text } from 'react-native'
import React from 'react'
import { Asignatura } from '../Modelos/Asignatura'

export default function ClasesComponent(props:Asignatura) {
  return (
    <View>
      <Text>Este es un componente secundario</Text>
      <Text>Nombre de la asignatura {props.nombreAsignatura}</Text>
      <Text>Cantidad de Horas: {props.horas}</Text>
    </View>
  )
}