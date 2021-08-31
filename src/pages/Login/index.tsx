import React, { useCallback } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/reducers/authReducer';
import { box, container, SignInSchema, mockUsers } from './constantes';


const Login: React.FC = () => {

    const dispatch = useDispatch()

    const onSubmit = useCallback((values: {email: string, senha: string}) => {
        const user = mockUsers.find(({email, senha}) => email === values.email && senha === values.senha)
        if(!!user) dispatch(logIn(user))
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