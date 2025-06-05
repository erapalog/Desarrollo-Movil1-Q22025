import { View, Text, Button ,Image, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

export default function Camara() {

   const [selectImage,setSelectImage]=useState<string | null>(null);

   //funcion para poder capturar iamgen de la galeria

   async function  tomarImage(){

    const result= await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        quality:1
    });

    if(!result.canceled){

        console.log(result)
        setSelectImage(result.assets[0].uri)
    }
   }


   //funcion para utilizar camara

   async function tomarFotografia() {

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            quality:1,
            videoQuality:1
        })

        if(!result.canceled){
            console.log(result)
            setSelectImage(result.assets[0].uri)
        }
    
   }
  return (
    <View style={style.container}>
      <Text>Capturar imagen</Text>
      <Button title='capturar imagen' onPress={tomarImage}></Button>
    <Button title='Tomar fotografia imagen' onPress={tomarFotografia}></Button>

      {
       selectImage && (
        <View style={style.containerImage}>
            <Image source={{uri:selectImage}} style={style.image}></Image>
        </View>
       ) 
      }
    </View>
  )
}

const style= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        padding:15
    },
    containerImage:{
        marginTop:10
    },
    image:{
        width:200,
        height:200,
        borderRadius:10
    }
})