import { useState } from "react"

import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"
import ReposList from "./components/ReposList"

function App() {
    // expressões: mount, updated e unmounted
    const [formularioVisivel, setFormularioVisivel] = useState(true)

    return (
        <>
            <Perfil nome="Douglas Medina" endereco="https://github.com/douglas-medina.png" />
            <ReposList />

            {/* {formularioVisivel && (
                <Formulario />
            )}
            <button type="button" onClick={() => setFormularioVisivel(!formularioVisivel)}>Toggle form</button> */}
        </>
    )
}

export default App


