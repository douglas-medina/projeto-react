import { useState } from "react"

import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"
import ReposList from "./components/ReposList"

function App() {
    // expressões: mount, updated e unmounted
    const [formularioVisivel, setFormularioVisivel] = useState(true)
    const [nomeUsuario, setNomeUsuario] = useState('')

    return (
        <>
            <input type="text" placeholder="Digite o usuário Github" onBlur={(e) => setNomeUsuario(e.target.value)} />

            {nomeUsuario.length > 4 && (
                <>
                    <Perfil nomeUsuario={nomeUsuario} />
                    <ReposList nomeUsuario={nomeUsuario} />
                </>
            )}

            {/* {formularioVisivel && (
                <Formulario />
            )}
            <button type="button" onClick={() => setFormularioVisivel(!formularioVisivel)}>Toggle form</button> */}
        </>
    )
}

export default App


