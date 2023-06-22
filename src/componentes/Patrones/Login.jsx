import { useState } from "react"
import InicioSesion from "./InicioSesion"
import LoginButton from "./LoginButton"

const Login = () => {
    const [usuario, setUsuario] = useState(null);
    
    const manejadorLogin = () => {
        setUsuario("Samuel");
    }

    return (

    <div>
        {
            usuario ? <InicioSesion nombre={usuario}/> : <LoginButton loguear={manejadorLogin}/>

        }
    </div>


  )
}

export default Login