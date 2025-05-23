import { View, Text ,StyleSheet, FlatList} from 'react-native'
import React from 'react'
import { useJuegoContext } from '../Provider/JuegosProvider';

export default function ListaPartida() {

     const { cantidadPartidas } = useJuegoContext();
 
  return (
    <View>
      
       <FlatList
        data={cantidadPartidas}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText2}>Partida #{item.id}</Text>
            <Text style={styles.cardSubText}>
              Resultado: {item.descripcion}
            </Text>
          </View>
        )}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  grid: { alignItems: "center", marginTop: 24 },
  card: {
    width: 70,
    height: 90,
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#9e9e9e",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  cardText: { fontSize: 26, color: "#fff" },
  listContainer: {
    paddingBottom: 24,
  },
  cardText2: {
    fontSize: 16,
    fontWeight: "600",
  },
  cardSubText: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
});