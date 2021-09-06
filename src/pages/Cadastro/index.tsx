import { ErrorMessage, Field, Form as FormikContainer, Formik } from 'formik'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { SignupSchema } from './constantes'
import cadastar from './scripts/cadastar'

import { useAppSelector } from '../../redux/hooks'
import { redirectToLogin } from '../../redux/reducers/cadastroReducer'

import Form from '../../components/Form'

const Cadastro: React.FC = () =>  {

    const { redirect } = useAppSelector(state =>  state.cadastro)
    const dispatch = useDispatch()

    const handleSubmit = useCallback(async (values) =>  {

        try{
            const sucess = await cadastar(values)
            sucess ? dispatch(redirectToLogin(true)) : alert('Erro ao cadastrar')
        }catch(error){console.log(error)}

    }, [dispatch])

    return(

        <>
            {!redirect ? (
                <>
                    <Form.Header />

                    <Form.Box title = "Criar Conta">
                        <Formik
                            initialValues = {{ nome: '', email: '', senha: '', confirmarSenha: '' }}
                            onSubmit = {handleSubmit}
                            validationSchema = {SignupSchema}
                        >

                            {({ isSubmitting }) =>  (
                                <FormikContainer style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                                    <Form.Section name = "input">
                                        <Form.Label id = "cadastro_name" label = "Nome" />
                                        <Field id = "cadastro_name" type = "nome" name = "nome" placeholder = "nome" />
                                        <ErrorMessage name = "nome" component = "h4" />
                                    </Form.Section>

                                    <Form.Section name = "input">
                                        <Form.Label id = "cadastro_email" label = "Email" />
                                        <Field id = "cadastro_email" type = "email" name = "email" placeholder = "email" />
                                        <ErrorMessage name = "email" component = "h4" />
                                    </Form.Section>

                                    <Form.Section name = "input">
                                        <Form.Label id = "cadastro_password" label = "Senha" />
                                        <Field id = "cadastro_password" type = "password" name = "senha" placeholder = "senha" />
                                        <ErrorMessage name = "senha" component = "h4" />
                                    </Form.Section>

                                    <Form.Section name = "input">
                                        <Form.Label id = "cadastro_password_confirm" label = "Repetir Senha" />
                                        <Field id = "cadastro_password_confirm" type = "password" name = "confirmarSenha" placeholder = "confirmar senha" />
                                        <ErrorMessage name = "confirmarSenha" component = "h4" />
                                    </Form.Section>
                                    
                                    <Form.Section name = "options">
                                        <Form.Button type = "submit" disabled = {isSubmitting} label = "Criar Conta" />
                                    </Form.Section>
                                    
                                </FormikContainer>
                            )}

                        </Formik>
                    </Form.Box>
                </>
            ) : <Redirect to = "/login" />}
        </>

    )

}

export default Cadastro