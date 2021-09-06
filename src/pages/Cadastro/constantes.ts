import * as yup from 'yup';

export const SignupSchema = () => yup.object().shape({
    nome: yup.string().required('O nome é obrigatório'),
    email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
    senha: yup.string().required('A senha é obrigatória'),
    confirmarSenha: yup.string().required('A confirmação de senha é obrigatória').oneOf([yup.ref('senha')], 'As senhas não conferem')
})