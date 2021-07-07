import React, { Component } from 'react'
/*LOS LIFE CYLES se refieren a lo que sucede con un componente 
durante su creacion,actulizacion y destrucion*/

/*React nos da metodos de controlar lo que se sucede durante
 el cyclo de vida del componente*/

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
        
        /*con set interval le pedimos que ejecute el method tick cada segundo(linea 38), cada vez que el
        componente ya este renderizado*/
        
        document.addEventListener("click", (e)=>{
            /* en este caso le  pedimos que el addeventListener en lo que el render del componente este completo*/
            this.setState({
                color: Math.floor(Math.random()*16777215).toString(16)
            });
        });
        
    }
    componentDidUpdate(prevProps,PrevState){ 
        /*los evento en componentDidUpdate se activan
        siempre que ocurre algun cambio en el render*/ 
        /**en que caso de que esten ocurriendo varios cambios a la vez en el render
         * PrevProps y PrevState nos ayudaran a filtrar que cambios deben disparar eventos
         * y que no
         */
        if(PrevState.color !== this.state.color) {
            alert(`cambio el color`);
        }
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
                <h1 style={{backgroundColor:'#'+ this.state.color}}>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}
