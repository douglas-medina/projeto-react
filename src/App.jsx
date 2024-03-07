function App() {

    const nome = "Douglas";

    function retornaNome() {
        return nome;
    }

    const pessoa = {
        nome: "Maria"
    }

    let estaDeDia = true

    return (
        <>
            <h1>Olá, {pessoa.nome}.</h1>
            <h2>Teste</h2>
            {estaDeDia && 'Bom dia'}
        </>
    )
}

export default App
