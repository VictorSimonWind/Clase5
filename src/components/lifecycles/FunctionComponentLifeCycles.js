/*LOS LIFE CYLES se refieren a lo que sucede con un componente 
durante su creacion,actulizacion y destrucion*/

/*React nos da metodos de controlar lo que se sucede durante
durante el cyclo de vida del componente*/

import React from 'react'
/* PARA PODER CONTROLAR LOS LIFE CYCLES EN UN FUNCTION COMPONENT
DEBEMOS IMPORTAR EL useEffect HOOK*/
import { useState,useEffect } from 'react'

export default function FunctionComponentLifeCycles() {


    const [date,setDate] = useState(new Date);
    const [bgColor,setbgColor] = useState(Math.floor(Math.random()*16777215).toString(16))

    /* useEffect  CUMPLE LAS FUNCIONES DE 
    componentDidMount()
    componentDidUpdate()
    componentWillUnmount()
     de un class component */

    /*con esta Syntaxis useEffect Cumple 
    la mismas funciones de 
    componentDidMount()*/ 
    useEffect(()=>{
        setInterval(()=>{
           tick();
        },1000)
    })

    useEffect(()=>{
              alert(`cambio de color`);
          /**agregandole un valor de nuestro state al final del use Effect
           * podemos activar nuestro evento, cada vez 
           * que se actualice el state
           */
    },[bgColor,date])


    const tick = () =>{
        setDate(new Date);
    }
    

    return (
        <div>
            <h1 style={{backgroundColor:'#'+ bgColor}}>{date.toLocaleTimeString()}</h1>
            <button onClick={()=> {
                setbgColor(Math.floor(Math.random()*16777215).toString(16))
                }}>cambiar color</button>
        </div>
    )
}
