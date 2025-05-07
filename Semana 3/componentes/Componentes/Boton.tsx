import { View, Text ,Button, Alert} from 'react-native'
import React from 'react'

export default function Boton() {
  return (
    <View>        
      <Button title='Boton en otro componente' onPress={()=>Alert.alert("Hola Mundo")}></Button>
    </View>
  )
}