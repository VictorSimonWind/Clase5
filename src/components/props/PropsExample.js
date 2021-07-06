import ComponentProps from './ComponentProps'

function hola(){

 return ('Hola! soy una funcion en el componente padre!')

}

function PropsExample() {
  return (
    <div>
      {/*LAS PROPS PUEDEN SER PASADAS A UN COMPONENTE 
    DE LA MISMA FORMA QUE UN A UNA ETIQUETA HTML SE LE PASAN PROPIEDADES
    */}

     <ComponentProps titulo='hola' descripcion='esta es la descripcion' piedepagina='pie de pagina'/>
     {/* <div onClick='' alt='' onChange=''>*/}

     {/*PARA MEJORAR SU LECTURA ES MEJOR 
     FORMETEAR LAS PROPS DE UN COMPONENTE 
     DE LA SIGUIENTE MANERA  */}
     <ComponentProps titulo='hola' 
                     descripcion='esta es la descripcion' 
                     piedepagina='pie de pagina'
                     />

     {/*PODEMOS NO PASARLE UN UNA PROPS QUE LE DICEMOS
     QUE ESPERE A UN COMPONENTE Y NO PASA NADA
     LA ETIQUETA APARECERA VACIA */}
     <ComponentProps titulo='hola' piedepagina='pie de pagina'/>

     {/*PODEMOS PASAR TODO TIPO DE ELEMENTOS ATRAVEZ DE LAS PROPS*/}
     <ComponentProps
                string='string'
                numeros={10}
                functiones={hola()}
                componentes={<ComponentProps/>}
                />
    </div>

  );
}

export default PropsExample;
