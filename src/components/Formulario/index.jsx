import { useState } from "react"

const Formulario = () => {

    let [materiaA, setMateriaA] = useState(0)
    let [materiaB, setMateriaB] = useState(0)
    let [materiaC, setMateriaC] = useState(0)
    let [nome, setNome] = useState('')

    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        // setNome(evento.target.value)
        setNome(estadoAnterior => {
            console.log(estadoAnterior)

            return evento.target.value
        })
    }

    const renderResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado.</p>
            )
        } else {
            return (
                <p>Olá, {nome}, você foi reprovado.</p>
            )
        }
    }

    return (
        <form>
            <input type="text" placeholder="Nome Completo:" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={({target}) => setMateriaB(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={({target}) => setMateriaC(parseInt(target.value))} />
            {renderResultado()}
        </form>
    )
}

export default Formulario