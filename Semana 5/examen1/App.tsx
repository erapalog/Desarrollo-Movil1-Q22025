import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './Componentes/Nav';
import ProviderBanco from './Contex/ProviderBanco';

export default function App() {
  return (
    
    <ProviderBanco>
        <Nav></Nav>
    </ProviderBanco>
    
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
