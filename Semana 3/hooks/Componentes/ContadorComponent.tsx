import { View, Text, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import ListaPersonaComponent from './ListaPersonaComponent';

export default function ContadorComponent() {


  const [contador, setContador] = useState<number>(0);

  function sumarContador(){
        setContador(contador+1) 
  }

  function restarContador(){

    if(contador==0)
        return
    setContador(contador-1)
  }

  useEffect(()=>{

    Alert.alert('Mensaje de Bienvinida','Componente Cargado');
    setContador(10)
 
  },[])


  return (
    <View>
      <Text>El valor del contador es: {contador}</Text>

     <Button title='Sumar' onPress={sumarContador} ></Button>
     {/*<Button title='Restar' onPress={restarContador}></Button>*/}

     <TouchableOpacity onPress={restarContador} style={style.button}>
        <Text style={style.textColor}>Restar</Text>
     </TouchableOpacity>

     <ListaPersonaComponent></ListaPersonaComponent>

    </View>
  )
}

const style = StyleSheet.create({
    button: {
        padding: 15,
        backgroundColor:'red',
        borderRadius: 5
    },
    textColor:{
        color:'white'
    }
});