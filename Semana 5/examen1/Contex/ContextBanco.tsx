import { createContext } from "react";
import { Deposito } from "../Modelos/Deposito";

export const ContexBanco= createContext({
    saldoInicial: 0,
    aumentarSaldo: (monto:number) => {},
    retirarSaldo : (monto:number) =>{},
    listaDeposito: [] as Deposito[]
})