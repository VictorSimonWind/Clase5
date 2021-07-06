import React, { Component } from 'react'

export default class ClassComponenteStateExample extends Component {
    constructor(props){
        super(props)
        /*this.state es una function especial de react que cada vez que cambia
        la misma vuelve a realizar un render del componente */ 
        this.state = {
            color: Math.floor(Math.random()*16777215).toString(16)
        }
    }
    render() {
        return (
            <div>
                <h1 style={{backgroundColor:'#'+ this.state.color,transition:'500ms ease-in-out'}}>
                    <h1>Cambia mi color</h1>
                        {/*usando el setState() podemos darle un nuevo valor a nuestro state*/}
                    <button onClick={()=> this.setState({
                        color:Math.floor(Math.random()*16777215).toString(16)
                    })}>Cambiar Color</button>
                </h1>
            </div>
        )
    }
}
