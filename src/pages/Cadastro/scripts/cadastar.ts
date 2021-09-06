import { User } from "../../../redux/reducers/authReducer";

export default async function cadastar(values: Omit<User, 'id'>) {

    try {

        const response = await fetch(process.env.REACT_APP_USER_CADASTRAR!, {
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