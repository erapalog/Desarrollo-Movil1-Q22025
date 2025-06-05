import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { Plantilla } from '../Modelos/Plantilla'
import { Tareas } from '../Modelos/Tareas'
import {contextTarea} from '../Context/ContexTarea'

export default function ProviderTareas({children}: Plantilla) {

  const [listaTareas, setlistaTareas]=useState<Tareas[]>([]);

  async function listarTareas(){
    //axios, fetch

    const response =  await fetch('http://https://xp0hrjz5-6000.use2.devtunnels.ms:6000/tarea');
    const data=await response.json();
    setlistaTareas(data)
  }

  async function agregarTareas(params:any) {
    
  }

  return (
    
    <contextTarea.Provider value={{listaTareas,listarTareas,agregarTareas}}>
        {children}
    </contextTarea.Provider>
  )
}

export const useConexteTarea=()=>{
    return useContext(contextTarea)
}