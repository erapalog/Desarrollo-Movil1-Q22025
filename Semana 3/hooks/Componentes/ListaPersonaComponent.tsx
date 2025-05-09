import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Persona } from '../Modelos/Persona'

export default function ListaPersonaComponent() {

  const [listaPersona, setListaPersona] = useState<Array<Persona>>([]);


  function agregarPersona(){
      const objetoPersona: Persona ={
        id: listaPersona.length+1,
        name:'Pedro - ' + listaPersona.length+1
      }

      setListaPersona([...listaPersona,objetoPersona])
      
  }

  useEffect(()=>{

    setListaPersona([...listaPersona, 
                {id: 1, name:"ANA"},
            {id: 2, name:"JUAN"},
            {id: 3, name:"PABLO"},
            {id: 4, name:"EMI"},
            {id: 5, name:"JESS"},
            {id: 6, name:"ROUS"},
            {id: 7, name:"ANDREA"},
            {id: 8, name:"CRIS"},
            {id: 9, name:"CARLOS"},
            {id: 10, name:"OSCAR"}
      ])
  },[])


  return (
    <View>
      <Text>Lista de Personas</Text>
      <Button title='Agregar Persona' onPress={agregarPersona}></Button>

        <FlatList
            data={listaPersona}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.card}>
                        <Text style={styles.cardText}>{item.name}</Text>
                </View>
            )}
            />

        
    </View>
  )
}

const styles = StyleSheet.create({
  
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 4, // sombra en Android
    shadowColor: '#000', // sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});