import { User } from "../../../redux/reducers/authReducer"

export default async function logar(values: { email: string, senha: string }) : Promise<User | null> {

    try {

        const response = await fetch(process.env.REACT_APP_USER_LOGIN!, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(values)
        })

        if (response.status === 200) {
            const json = await response.json()
            if (json.listaResultado.length > 0) return json.listaResultado[0] as User
        }

        throw new Error('Usuário não encontrado')

    } catch (error) {

        return null

    }

}