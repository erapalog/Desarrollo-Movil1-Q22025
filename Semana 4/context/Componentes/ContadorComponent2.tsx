import { View, Text, Button } from 'react-native'
import React from 'react'
import { useContadorContex } from '../Provider/ProviderContador'

export default function ContadorComponent2() {

 const {sumarContador} = useContadorContex()
  return (
    <View>
        <Button onPress={sumarContador} title='Sumar al contador 2'></Button>
    </View>
  )
}