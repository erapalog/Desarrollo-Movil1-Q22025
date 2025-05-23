import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { useContexBanco } from '../../Contex/ProviderBanco'

export default function Transferencias() {


  const [nombre, setNombre]= useState('')
  const [cuenta, setCuenta]= useState('')
  const [monto, setMonto]= useState("")

  const {retirarSaldo,saldoInicial} = useContexBanco()
  return (
    <View>

  <Text>Saldo Actual {saldoInicial}</Text>
     
     <TextInput placeholder='Nombre'
      value={nombre}
      onChangeText={setNombre}/>
    

     <TextInput placeholder='Cuenta'
     value={cuenta}
     onChangeText={setCuenta}/> 

     <TextInput placeholder='Monto'
     value={monto}
     onChangeText={setMonto}/> 


     <Button title='Transferir saldo' onPress={()=>retirarSaldo(parseFloat(monto))}></Button>
    </View>
  )
}