import React from 'react'
//PARA PODER USAR SetState en una funcion debemos importar el HOOK useState
import { useState } from 'react'

export default function FunctionalComponentStateExample() {

    /*EL HOOK useState NOS PERMITE CREAR UNA
      ARRAY DE VARIABLES DONDE EN ESTE CASO state 
      ES EL VALOR MUTABLE Y setState FUNCIONA PARA PASAR EL VALOR 
      A NUESTRO state Y INICIAR EL RE-RENDER DEL COMPONENTE*/
      
    const [state,setState] = useState(['desactivado']) /*dentro useState debemos colocar el valor por defecto, en este caso un string*/
   

    return (
        <div>
            
            <h1>{state}</h1>
            {/*ES IMPORTANTE QUE LOS SET STATE ESTEN SIEMPRE 
            DENTRO DE UNA FUNCION PARA EVITAR RENDERS INFINITOS*/}
            <button onClick={()=> setState('Activado')}>Activar</button>
        </div>
    )
}
