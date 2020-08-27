import React from 'react';

import axios from 'axios';

import {
  Container,
  TitleLogin,
  FieldLogin,
  ErrorMessageSpan,
  ButtonLogin,
} from './styles';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

//import { history } from '../../App/history';

const Login = () => {
  const handleSubmit = (values) => {
    axios.post('http://localhost:3001/v1/api/auth', values).then((resp) => {
      const { data } = resp;
      if (data) {
        localStorage.setItem('app-token', data);
        //history.push('/dashboard');
      }
    });
  };

  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  return (
    <Container>
      <TitleLogin>Login</TitleLogin>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <Form>
          <div>
            <FieldLogin name="email" type="email" />
            <br></br>
            <ErrorMessageSpan component="span" name="email" />
          </div>

          <div className="Login-Group">
            <FieldLogin
              name="password"
              type="password"
              className="Login-Field"
            />
            <br></br>
            <ErrorMessageSpan component="span" name="password" />
          </div>
          <ButtonLogin type="submit">Entrar</ButtonLogin>
        </Form>
      </Formik>
    </Container>
  );
};

export default Login;
