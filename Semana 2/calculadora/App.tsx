import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Rutina } from './Modelos/Rutina';

export default function App() {

  let diasEjercicio:number[] = [2,2,0,6,0,0,0];
  let objetivo:number =4;
  let respuesta : Rutina;


  respuesta= calcularDias(diasEjercicio,objetivo)

  function calcularDias(diasEjercicio : number[],  objetivo: number) :Rutina {

    let trainingDay:number=0;
    let average:number=0;
    let objetivoComplido:string ='';
    for (let x of diasEjercicio){

      if (x>0){
        ++trainingDay
        average+=x;
      }
    }

    objetivoComplido = (trainingDay>=objetivo) ? 'SI' : 'NO'


    let resuesta:Rutina ={
      periodoLength: diasEjercicio.length,
      trainingDay : trainingDay,
      success: objetivoComplido,
      rating: 1,
      ratinDescription:'Objetivo no logrado',
      target:objetivo,
      average:average/diasEjercicio.length
    }

    return resuesta

  }
  return (
    <View style={styles.container}>
      
      
        <Text>
          Periodo de ejercicio :{respuesta.periodoLength} dias
        </Text>
        <Text>
          Dias Entrenados: {respuesta.trainingDay} 
        </Text>
        <Text>
         Objetivo Cumplido: {respuesta.success} 
        </Text>
        <Text>
          Rating :{respuesta.rating} 
        </Text>
        <Text>
          Comentario : {respuesta.ratinDescription} 
        </Text>
        <Text>
          Objetivo Propuesto : {respuesta.target} 
        </Text>
        <Text>
          Horas promedio a la semana:  {respuesta.average} 
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
