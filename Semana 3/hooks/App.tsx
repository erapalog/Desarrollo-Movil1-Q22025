import { StyleSheet, Text, View } from 'react-native';
import ContadorComponent from './Componentes/ContadorComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    
      <ContadorComponent></ContadorComponent>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
});
