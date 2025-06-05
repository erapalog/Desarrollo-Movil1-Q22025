import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useConexteTarea } from '../Provider/ProviderTareas'

export default function Home() {

  const { listaTareas, listarTareas } = useConexteTarea()

  useEffect(() => {
    listarTareas()
  }, [])

  return (
    <View>
      <Text>Listado de tareas</Text>


      {
        listaTareas.length === 0 ? (
          <Text>Lista de tareas esta cargado</Text>
        ) :
          (
            <FlatList
              data={listaTareas}
              keyExtractor={(item) => item.DescripcionTarea.toString()}
              renderItem={({ item }) => {
                return <Text>
                  {item.DescripcionTarea}
                  {item.Responsable}
                </Text>
              }}

            >

            </FlatList>
          )
      }

    </View>
  )
}