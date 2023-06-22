/** PATRONES DE DISEÑO **/
//En React tenemos algunos patrones de diseño que nos permite reutilizar componentes. 

//HIGH ORDER COMPONENTS ( HOC )
//Un función que toma como argumento un componente y devuelve un nuevo componente con alguna funcionalidad adicional. 

//Ejemplo 1: Voy a crear una función que recibe un componente llamado "Mensaje" que solo muestra un párrafo y le voy a agregar un título. 

export const mensajeConTitulo = (Mensaje) => {
    return function() {
        return (
            <>  
                <h2>Hola Mundo</h2>
                <Mensaje/>
            </>
        )
    }
}


//Ejemplo muy de Argentina: aumento de precios. 

export const conAumento = (Producto) => {
    return function({nombre, precio}) {
        let nuevoPrecio = precio + 500;
        return <Producto nombre={nombre} precio={nuevoPrecio} />
    }
}


const Hoc = () => {
  return (
    <div>Hoc</div>
  )
}

export default Hoc