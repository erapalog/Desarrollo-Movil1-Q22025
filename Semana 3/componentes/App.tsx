import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import ClasesComponent from './Componentes/ClasesComponent';
import Boton from './Componentes/Boton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Primera aplicacion con componentes</Text>

      <ClasesComponent nombreAsignatura="Matematicas" horas={6}></ClasesComponent>
      <ClasesComponent nombreAsignatura="Ingles" horas={5}></ClasesComponent>
      <ClasesComponent nombreAsignatura="Desarrollo Movil" horas={7}></ClasesComponent>

      <ClasesComponent nombreAsignatura='Desarrollo Web' horas={8}></ClasesComponent>

      <Boton></Boton>

      <Button title='Boton 2' onPress={()=> Alert.prompt("Ingresa texto")}></Button>
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
