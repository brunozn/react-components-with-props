import React from 'react';

import axios from 'axios';

import imgLogin from '../../assets/login.png';

import {
  Container,
  Title,
  SubTitle,
  FieldLogin,
  ErrorMessageSpan,
  ButtonLogin,
  DivLeftColumn,
  DivRightColumn,
  RememberDiv,
  InputPassword,
  LinkPassword,
  SpanPassword,
  ImgLogin,
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
      <DivLeftColumn>
        <Title primary>Bem-vindo</Title>
        <SubTitle>Faça o login e tenha acesso ao controle spotify</SubTitle>
        <ImgLogin alt="img" src={imgLogin} />
      </DivLeftColumn>

      <DivRightColumn>
        <Title>Login</Title>
        <Formik
          initialValues={{}}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <Form>
            <div>
              <FieldLogin name="email" type="email" placeholder="Email" />
              <br></br>
              <ErrorMessageSpan component="span" name="email" />
            </div>

            <div className="Login-Group">
              <FieldLogin
                name="password"
                type="password"
                className="Login-Field"
                placeholder="Senha"
              />
              <br></br>
              <ErrorMessageSpan component="span" name="password" />
            </div>
            <br></br>
            <RememberDiv className="remember-forgot">
              <label>
                <InputPassword type="checkbox" name="show-password" />
                <SpanPassword>Lembre-me</SpanPassword>
              </label>

              <LinkPassword to="#">Esqueceu a Senha?</LinkPassword>
            </RememberDiv>

            <ButtonLogin type="submit">Entrar</ButtonLogin>
          </Form>
        </Formik>
      </DivRightColumn>
    </Container>
  );
};

export default Login;
