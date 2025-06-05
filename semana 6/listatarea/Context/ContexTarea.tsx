import { createContext } from "react";
import { Tareas } from "../Modelos/Tareas";

export const contextTarea= createContext({
    listaTareas: [] as Tareas[],
    agregarTareas: (tarea: Tareas)=>{},
    listarTareas:()=>{}
})