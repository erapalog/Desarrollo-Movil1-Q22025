import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navegacion from './Componentes/Navegacion';
import ProviderTareas from './Provider/ProviderTareas';

export default function App() {
  return (
    <ProviderTareas>

      <Navegacion>

      </Navegacion>
    </ProviderTareas>

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
