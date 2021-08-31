import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { redirectToLogin } from '../../redux/reducers/cadastroReducer';
import {box, container, SignupSchema} from './constantes'

const Cadastro: React.FC = () => {

    const { redirect } = useAppSelector(state => state.cadastro);
    const dispatch = useDispatch()
    const handleSubmit = useCallback(() => { dispatch(redirectToLogin(true)) }, [dispatch])

    return (
        <>
            {!redirect &&
                <div style={container}>
                    <div style={box}>

                        <Formik
                            initialValues={{ nome:'', email:'', senha:'', confirmarSenha:'' }}
                            onSubmit={handleSubmit}
                            validationSchema={SignupSchema}
                        >

                            {({ isSubmitting }) => (
                                <Form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                                    <Field type="nome" name="nome" placeholder="Nome" />
                                    <ErrorMessage name="nome" component="div" />

                                    <Field type="email" name="email" placeholder="Email" />
                                    <ErrorMessage name="email" component="div" />

                                    <Field type="password" name="senha" placeholder="Senha" />
                                    <ErrorMessage name="senha" component="div" />

                                    <Field type="password" name="confirmarSenha" placeholder="Confirmar senha" />
                                    <ErrorMessage name="confirmarSenha" component="div" />

                                    <button type="submit" disabled={isSubmitting}>Submit</button>
                                </Form>
                            )}

                        </Formik>
                    </div>
                </div>
            }
            {redirect && <Redirect to="/login" />}
        </>

    );
}

export default Cadastro;