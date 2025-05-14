import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InformacionAlumno from './Componentes/InformacionAlumno';
import InformacionClase from './Componentes/InformacionClase';
import ProviderAlumno from './Provider/ProviderAlumno';
import InformacionAlumnoComponent from './Componentes/InformacionAlumnoComponent';
import InformacionClaseComponent from './Componentes/InformacionClaseComponent';
import ProviderContador from './Provider/ProviderContador';
import ContadorComponent from './Componentes/ContadorComponent';
import ContadorComponent2 from './Componentes/ContadorComponent2';

export default function App() {
  return (
    <View style={styles.container}>

      {/*<InformacionAlumno nombre='Luis' clase1='Matematicas' clase2='Informatica'></InformacionAlumno>
      <InformacionClase nombre='Luis' clase1='Matematicas' clase2='Informatica'></InformacionClase>*/}

      <ProviderAlumno>
        <InformacionAlumnoComponent></InformacionAlumnoComponent>
        <InformacionClaseComponent/>

      </ProviderAlumno>

     <ProviderContador>
          <ContadorComponent></ContadorComponent>
          <ContadorComponent2></ContadorComponent2>
      </ProviderContador>


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
