import { View, Text ,Alert } from 'react-native'
import React, { ReactNode, useContext, useState } from 'react'
import { ContexBanco } from './ContextBanco'
import { Deposito } from '../Modelos/Deposito';

interface ViewReact{
    children: ReactNode
}
export default function ProviderBanco({children}:ViewReact) {

  const [saldoInicial, setSaldoInicial]= useState(10000);
  const [listaDeposito, setlistaDeposito]= useState<Deposito[]>([]);

  function aumentarSaldo(monto:number){
        setSaldoInicial(saldoInicial+monto)

        let detalleDeposito: Deposito={
            monto:monto,
            motivo: "Deposito"
        }
        setlistaDeposito([...listaDeposito,detalleDeposito])
  }

  function retirarSaldo(monto:number){

    if(monto>saldoInicial){
        showAlert("Transaccion no se puede completar, monto mayor saldo")
        console.log("Transaccion no se puede completar, monto mayor saldo")
    }
    else{
        let detalleDeposito: Deposito={
            monto:monto,
            motivo: "Retiro"
        }
        setlistaDeposito([...listaDeposito,detalleDeposito])
        setSaldoInicial(saldoInicial-monto)
        showAlert("transferencia realizada exitosamente")
    }
   
}


const showAlert = (mensaje:string) => {
    Alert.alert(
      'Alerta de Transferencia',        
      mensaje, 
      [
        {
          text: 'Cancelar',         
          onPress: () => console.log('Cancelado'),
          style: 'cancel',
        },
        {
          text: 'Aceptar',          
          onPress: () => console.log('Aceptado'),
        },
      ],
      { cancelable: true }          
    );
  };


  return (
   <ContexBanco.Provider value={{saldoInicial,aumentarSaldo,retirarSaldo,listaDeposito}}>
    {children}
   </ContexBanco.Provider>
  )
}

export const useContexBanco=() =>{
    return useContext(ContexBanco)
}