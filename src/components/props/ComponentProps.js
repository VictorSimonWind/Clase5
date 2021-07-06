import React from 'react'

export default function ComponentProps(props) {
    return (
        <div>
            <h1>estas son mis propiedades</h1>
            <h1>{props.titulo}</h1>
            <p>{props.descripcion}</p>
            <small>{props.piedepagina}</small>
            {props.string}
            {props.numeros}
            {props.componentes}
            {props.funciones}
            
        </div>
    )
}
