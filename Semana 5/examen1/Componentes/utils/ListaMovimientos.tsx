import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useContexBanco } from '../../Contex/ProviderBanco'

export default function ListaMovimientos() {

    const { listaDeposito } = useContexBanco()

    return (
        <View>
            <FlatList
                data={listaDeposito}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (

                    <View style={styles.userItem}>
                        <Text>Motivo: {item.motivo}</Text>
                        <Text>Monto: {item.monto}</Text>

                    </View>
                )}
            >

            </FlatList>


        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    listTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    userItem: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginVertical: 5,
    },
});