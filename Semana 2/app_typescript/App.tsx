import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Persona } from './Modelos/Persona';




export default function App() {

  let saludo:string ="Bienvenido a la primera clase";

  let detallePersona: Persona ={
      nombre: 'Juan',
      apellido:'Perez',
      fechaNacimiento :'2000-09-09'
  };

  let listaPersonas: Persona []=[
    {nombre:'Ana', apellido:' garcia', fechaNacimiento:'2020-09-09'},
    {nombre:'Pedri', apellido:' Lara', fechaNacimiento:'2020-09-09'},
    {nombre:'luis', apellido:' Valle', fechaNacimiento:'2020-09-09'},
  ]


  for (let x of listaPersonas){
    console.log(x)
  }


  let detallePersona2 : Persona={
    nombre:'Alejandra',
    apellido:'Perez'
  }

  function devolverSaludo(nombre: string){

    return saludo + nombre;
  }




  return (
    <View style={styles.container}>
      <Text>Primera aplicacion en React Native</Text>
      <Text>{saludo} </Text>
      <Text>{devolverSaludo('Erick')}</Text>

      <Text>
        Nombre Persona: {detallePersona.nombre}
      </Text>
      <Text>
        Nombre Aplleido: {detallePersona.apellido}
      </Text>
      <Text>
        Fecha nacimineto: {detallePersona.fechaNacimiento}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
