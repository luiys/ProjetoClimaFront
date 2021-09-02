import React, { useCallback } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/reducers/authReducer';
import { box, container, SignInSchema } from './constantes';
import logar from './scripts/logar';


const Login: React.FC = () => {

    const dispatch = useDispatch()

    const onSubmit = useCallback(async (values: { email: string, senha: string }) => {
        try {
            const result = await logar(values)
            !!result ? dispatch(logIn(result)) : alert('Usuário ou senha inválidos')
        } catch (error) { alert('Erro') }
    }, [dispatch])

    return (
        <div style={container}>
            <div style={box} >
                <Formik
                    initialValues={{ email: '', senha: '' }}
                    onSubmit={onSubmit}
                    validationSchema={SignInSchema}
                >

                    <Form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Field type="email" name="email" placeholder="email" />
                        <ErrorMessage name="email" component="div" />

                        <Field type="password" name="senha" placeholder="senha" />
                        <ErrorMessage name="senha" component="div" />

                        <button type="submit">Submit</button>
                    </Form>


                </Formik>
            </div>
        </div>

    );
}

export default Login;