import * as yup from 'yup';
import { User } from '../../redux/reducers/authReducer';

export const SignInSchema = () => yup.object().shape({
    email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
    senha: yup.string().required('A senha é obrigatória'),
})

export const mockUsers : User[] = [
    {id: 1, nome: 'João', email:'joao@gmail.com', senha:'123'},
    {id: 2, nome: 'Maria', email: 'maria@gmail.com', senha: '123'},
    {id: 3, nome: 'Pedro', email:'pedro@gmail.com', senha: '123'},
    {id: 4, nome: 'Luis Gustavo', email: 'lg@gmail.com', senha: '123'},
]