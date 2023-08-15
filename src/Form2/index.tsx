import { useState } from "react"

export function Form2() {
    
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState('')

    const [user, setUser] = useState({})
    // function handleRegister(e: React.FormEvent<HTMLInputElement> ) {
    function handleRegister(e:any) {
        e.preventDefault()

        setUser({
            nome: nome,
            idade: idade,
            email: email
        })
    }
    
    return (
    <div>    
        <h1>React test App</h1>

            <form onSubmit={handleRegister}>
                <label>Nome</label>
                <input
                    type="text"
                    placeholder="nome"
                    onChange={e => setNome(e.target.value)} value={nome}
                />
                <label>Email</label>
                <input
                    type="text"
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)} value={email}
                />
                <label>Idade</label>
                <input
                    type="text"
                    placeholder="idade"
                    onChange={e => setIdade(e.target.value)} value={idade}
                />
                <button type="submit">Cadastrar</button>
            </form>

        <p> { user.nome } { user.email } { user.idade } </p>
    </div>
    )
}