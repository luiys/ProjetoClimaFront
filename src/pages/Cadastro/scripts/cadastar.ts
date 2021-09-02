import { User } from "../../../redux/reducers/authReducer";

export default async function cadastar(values: Omit<User, 'id'>) {

    try {

        const response = await fetch('http://localhost:5000/api/user/cadastro', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                nome: values.nome,
                email: values.email,
                senha: values.senha,
            })
        })

        return response.status === 201 ? true : false

    } catch (error) {
        console.log(error);
        return false
    }

}