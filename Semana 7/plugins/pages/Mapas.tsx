import { View,StyleSheet, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'

export default function Mapas() {
  return (
    <View style={styles.container}>

      <MapView style={styles.map}></MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});