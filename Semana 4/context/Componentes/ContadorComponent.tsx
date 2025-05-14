import { View, Text, Button } from 'react-native'
import React from 'react'
import { useContadorContex } from '../Provider/ProviderContador'
import { useAlunoContext } from '../Provider/ProviderAlumno';

export default function ContadorComponent() {

  const {contador,sumarContador,restarContador} = useContadorContex();
  const {alumno} =useAlunoContext()

  return (
    <View>
      <Text>Valor del contador {contador}</Text>

      <Button onPress={sumarContador} title='Sumar al contador'></Button>
      <Button onPress={restarContador} title='Restar al contador'></Button>

       <Text>ALumno {alumno.nombre}</Text>
    </View>
  )
}