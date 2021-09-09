import React, { useCallback } from 'react'
import { ErrorMessage, Field, Form as FormikContainer, Formik } from 'formik'
import { useDispatch } from 'react-redux'

import { SignInSchema } from './constantes'
import logar from './scripts/logar'

import { logIn } from '../../redux/reducers/authReducer'
import Form from '../../components/Form'

const Login: React.FC = () => {

    const dispatch = useDispatch()

    const onSubmit = useCallback(async (values: { email: string, senha: string }) => {
        try {
            // ! Retirar em producao
            if(true)return dispatch(logIn({id: 1, nome: 'teste', email: 'lg@gmail.com', senha: '123'}))

            //const result = await logar(values)
            //!!result ? dispatch(logIn(result)) : alert('Usuário ou senha inválidos') //! Retirar comentario em producao
        } catch (error) { alert('Erro') }
    }, [dispatch])

    return(

        <>
            <Form.Header />

            <Form.Box title = "Fazer Login">
                <Formik
                    initialValues = {{ email: '', senha: '' }}
                    onSubmit = {onSubmit}
                    validationSchema = {SignInSchema}
                >

                    <FormikContainer style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                        <Form.Section name = "input">
                            <Form.Label id = "login_email" label = "Email" />
                            <Field id = "login_email" type = "email" name = "email" placeholder = "email" />
                            <ErrorMessage name = "email" component = "h4" />
                        </Form.Section>

                        <Form.Section name = "input">
                            <Form.Label id = "login_password" label = "Senha" />
                            <Field id = "login_password" type = "password" name = "senha" placeholder = "senha" />
                            <ErrorMessage name = "senha" component = "h4" />
                        </Form.Section>

                        <Form.Section name = "options">
                            <Form.Button type = "submit" disabled = {false} label = "Entrar" />
                        </Form.Section>

                    </FormikContainer>

                </Formik>
            </Form.Box>
        </>

    )

}

export default Login;