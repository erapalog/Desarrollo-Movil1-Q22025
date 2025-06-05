import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location';
import MapView, { Marker, Region } from 'react-native-maps';

export default function Locacion() {

  //latitud,longitud, altitud

  const [location, setLocaion] = useState<Location.LocationObject | null>(null);
  const [error, setError] = useState('');



  useEffect(() => {
    (
      async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();

        console.log(status)

        if (status !== 'granted') {
          Alert.alert('Permiso denegado')
          return;
        }

        let location = await Location.getCurrentPositionAsync();
        

        setLocaion(location)
      }
    )();

  }, []);

  return (
    <View style={styles.container}>

      {
        location ? (

          <MapView style={styles.map}
            initialRegion={{
              latitude: location?.coords.latitude,
              longitude: location?.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0452
            }}
          >

            <Marker
              coordinate={{
                latitude: location?.coords.latitude,
                longitude: location?.coords.longitude
              }}
              title='Mi ubicacion'
              description='La ubicacion de mi zona es'
            >

            </Marker>
          </MapView>
        ) :
          <Text>Buscando Locacion...</Text>
      }

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