import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { Plantilla } from '../Modelos/Plantilla'
import {contextConador} from '../Context/ContextContador'
export default function ProviderContador({children}: Plantilla) {

  const [contador, setContador]=useState<number>(0);

  function sumarContador(){
    setContador(contador+1)
  }

  function restarContador(){
    setContador(contador-1)
  }

  return (
   <contextConador.Provider value={{contador,sumarContador,restarContador}}>
        {children}
   </contextConador.Provider>
  )
}

export const useContadorContex =()=>{
        return useContext(contextConador)
} 