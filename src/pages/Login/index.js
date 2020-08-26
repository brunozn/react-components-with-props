import React from 'react';

import { Container } from './styles';
import { ErrorMessage, Formik, Form, Field } from 'formik';

const Login = () => {
  const handleSubmit = (values) => console.log(values);
  return (
    <Container>
      <h1>Login</h1>
      <Formik initialValues={{}} onSubmit={handleSubmit}>
        <Form>
          <div>
            <Field name="email" />
            <ErrorMessage component="span" name="email"></ErrorMessage>
          </div>
          <button type="submit">Entrar</button>
        </Form>
      </Formik>
    </Container>
  );
};

export default Login;
