import Articulos from "./componentes/Articulos/Articulos"
import RepasoHooks from "./componentes/RepasoHooks/RepasoHooks"

//Importamos la función y el componente Mensaje: 
import Mensaje from "./componentes/Patrones/Mensaje";
import { mensajeConTitulo, conAumento } from "./componentes/Patrones/Hoc";
import Producto from "./componentes/Patrones/Producto";
import Login from "./componentes/Patrones/Login";


const App = () => {
  const NuevoComponente = mensajeConTitulo(Mensaje);
  const NuevoProducto = conAumento(Producto);

  return (
    <div> 
      <h1>Blog de Gatitos</h1>
      <Articulos img="https://placekitten.com/200/287" titulo="Alimentos Veganos"/>

      <Articulos img="https://placekitten.com/200/286" titulo="El Estres en los gatos">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam obcaecati ea saepe ducimus labore dolorum officiis quo sequi temporibus dolor aspernatur explicabo, eius a harum cum ad magnam voluptatem dolores?</p>
        <strong>Tiempo de lectura: 3 minutos</strong>
      </Articulos>

      <Articulos  img="https://placekitten.com/200/290" titulo="El color de los gatos">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non beatae natus ratione iste voluptatibus praesentium numquam fugiat, inventore id sequi perferendis cumque eligendi fuga consectetur ullam facere necessitatibus omnis sapiente. Repudiandae ut eum consectetur quas, optio corrupti molestiae quisquam neque, et numquam sint perferendis dolores tempora expedita veritatis doloremque voluptas dolore libero! Debitis hic blanditiis excepturi deleniti possimus ullam beatae! Mollitia distinctio vero harum officiis facere corporis, quae minima pariatur consectetur accusantium nostrum porro eius temporibus earum necessitatibus voluptas ea voluptate, quos nihil soluta architecto maiores? Dolore veniam possimus officiis ratione id assumenda soluta molestiae incidunt cumque explicabo asperiores numquam, laudantium laboriosam corrupti error quod? Alias ducimus voluptatem quo quos harum a saepe, porro, placeat sunt dignissimos fuga provident, quaerat error incidunt sed ipsum culpa. Voluptatum sunt non culpa dignissimos et. Magni tenetur voluptatem odit quibusdam fugit, debitis repudiandae ex et. Veniam consectetur totam ut quae nulla! Doloribus illum mollitia temporibus consequatur, amet tempore nemo, dolore earum, numquam error repellendus hic neque? Provident atque molestias eveniet repellat facere odit numquam assumenda, repellendus aliquid, voluptatem consectetur soluta fugit quas quidem reiciendis laborum? Tenetur a dignissimos molestias quo voluptas labore animi facere ab aliquid repudiandae? Dolorum iste dolor nostrum officiis explicabo voluptatibus.</p>
      </Articulos>

      <RepasoHooks/>

      <NuevoComponente/>

      <NuevoProducto nombre="paltas" precio={500}/>

      <Login/>
    </div>
  )
}

export default App
