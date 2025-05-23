import { View, Text, Button } from 'react-native'
import React from 'react'
import { useContexBanco } from '../../Contex/ProviderBanco'
import TopCincoMovimiento from '../utils/TopCincoMovimiento'

export default function Inicio() {

  const {saldoInicial, aumentarSaldo} = useContexBanco()
  return (
    <View>
      <Text>Bienvenido a la aplicacoi MIBANCO</Text>
      <Text>Saldo Actual {saldoInicial}</Text>

      <Button title='Depositar' onPress={()=> aumentarSaldo(500)}></Button>

      <TopCincoMovimiento></TopCincoMovimiento>
    </View>
  )
}