import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { Plantilla } from '../Modelos/Plantilla'
import { Alumno } from '../Modelos/Alumno'
import {alumnoContext} from '../Context/ContextAlumno'

//recibir un props del tipo React Node
// Definir las funcionaliades que se definieron en el contexto
//exoprtar contexto
export default function ProviderAlumno(props: Plantilla) {


  const [alumno, setAlumno] = useState<Alumno>({
    nombre: 'Luis',
    clase1:'Matematicas',
    clase2:'Informatica'
  })

  return (
    <alumnoContext.Provider value={{alumno}}>
            {props.children}
    </alumnoContext.Provider>
  )
}

export const useAlunoContext =()=>{
        return useContext(alumnoContext)
}