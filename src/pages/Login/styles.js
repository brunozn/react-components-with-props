import styled from 'styled-components';

import { Field, ErrorMessage } from 'formik';

export const Container = styled.div`
  background: #ffffff;
  width: 30vw;
  height: 40vh;
  margin: calc(100vh / 3) auto 0px;
  text-align: center;
`;

export const TitleLogin = styled.h1`
  color: #33333;
  padding-top: 30px;
`;

export const FieldLogin = styled(Field)`
  background: ##f5d5d5;
  color: #333333;
  margin: 0.5rem 0px;
  padding: 0.2rem;
  font-size: 1.2rem;
  width: 20vw;

  & focus {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    outline: none;
  }
`;

export const ErrorMessageSpan = styled(ErrorMessage)`
  color: #ff8080;
`;

export const ButtonLogin = styled.button`
  color: #fff;
  background-color: #1db954;
  margin-top: 13px;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  padding: 16px 48px 18px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border-width: 0;
  letter-spacing: 2px;
  min-width: 130px;
  text-transform: uppercase;
  white-space: normal;

  &:hover {
    cursor: pointer;
    background: red;
  }
`;
