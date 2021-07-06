import React, { Component } from 'react'

export default class ClassComponenteLifeCycles extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            color: Math.floor(Math.random()*16777215).toString(16)

        }
    }
    /*componentDidMount 
     ES UN CYCLE EVENTS METHOD Y NOS PERMITE CONTROLAR LO QUE SUCEDE EN 
    JUSTO DESPUES DEL RENDER DE NUESTRO COMPONENTE
    */
    componentDidMount() {
        /*los evento en componentDidMount se activan
        despues de que el render del componente esta finalizado*/ 

        this.timer = setInterval(()=> this.tick(),1000);
        /*con set interval le pedimos que ejecute el method tick cada segundo, cada vez que el
        componente ya este renderizado*/
        
        document.addEventListener("click", (e)=>{
            /* en este caso le  pedimos que el addeventListener en lo que el render del componente este completo*/
            this.setState({
                color: Math.floor(Math.random()*16777215).toString(16)
            });
        });
        
    }
    componentDidUpdate(){
        this.alamart = alert(`cambio el color`);
    }

    /*el metodo Tick que llamamos en el componentDidMount cambia
    el valor de nuestro state date y vuelve a hacer el render de nuestro reloj*/ 
    tick() {
        this.setState({
            date: new Date()
        });
    }

    
    render() {
        return (
            <div>
                <h1 style={{backgroundColor:'#'+ this.state.color,transition:'500ms ease-in-out'}}>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}
