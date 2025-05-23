import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navegacion from './Componentes/Navegacion';
import TabNavegacion from './Componentes/TabNavegacion';

export default function App() {
  return (
    
    <NavigationContainer>
      {/*<Navegacion></Navegacion>*/}

    <TabNavegacion></TabNavegacion>

    </NavigationContainer>
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
