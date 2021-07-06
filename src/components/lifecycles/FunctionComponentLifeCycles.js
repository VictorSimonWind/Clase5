import React from 'react'
/* PARA PODER CONTROLAR LOS LIFE CYCLES ES UN FUNCTION COMPONENT
DEBEMOS IMPORTAR EL useEffect HOOK*/
import { useState,useEffect } from 'react'

export default function FunctionComponentLifeCycles() {

    const [date,setDate] = useState(new Date);

    /* useEffect  CUMPLE LAS FUNCIONES DE 
    componentDidMount()
    componentDidUpdate()
    componentWillUnmount*/

    /*con esta Syntaxis useEffect Cumple 
    la mismas funciones de 
    componentDidMount()*/ 
    useEffect(()=>{
        setInterval(()=>{
           tick();
        },1000)
       })

    const tick = () =>{
        setDate(new Date);
    }

    return (
        <div>
            <h1>{date.toTimeString()}</h1>
        </div>
    )
}
