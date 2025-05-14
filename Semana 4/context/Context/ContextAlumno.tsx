import { createContext } from "react";
import {Alumno} from '../Modelos/Alumno'

export const alumnoContext= createContext({
    alumno: {} as Alumno
})