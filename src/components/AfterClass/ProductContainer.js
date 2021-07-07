import React from 'react'
import {useState} from 'react'
import Product from './Product'
import {useEffect} from 'react'
//

export default function ProductContainer() {

    const [cart,setCart] = useState([]);
    const primerrender = useRef(true);

    const getProduct = (form,producto) =>{
        form.preventDefault();
        
        let item = {
            producto:producto.title,
            image:producto.image,
            price:producto.price,
            qty:form.target[1].value
        }
        setCart([...cart,item]);
    }

    useEffect(()=>{
        if(primerrender.current){
            primerrender.current = false;
        } else {
            alert('Se agrego el item al carrito');
        }
    },[cart])

    return (
        <div>
            <Product
                title='Tarjeta Grafica rx6900XT'
                image='https://www.amd.com/system/files/2020-10/579976-radeon-rx-6000xt-left-angle-1260x709_0.png'
                desc='Tarjeta de alta gama'
                addToCart={getProduct}
                price={320000}
                />

                <div className='subtotal'>
                    {cart.map(element =>{
                        return (
                        <>
                        <h3>Producto</h3>
                        {element.title}
                        <h3>cantidad</h3>
                        {element.qty}
                        <h3>subtotal por Producto</h3>
                        {element.price}
                        <h3>total de producto</h3>
                        {element.price * element.qty}
                        </>
                        )
                    })}
                </div>
        </div>
    )
}
