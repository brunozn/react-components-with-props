import styled from 'styled-components';
//import colors from '../../UI/Colors';
import { Field, ErrorMessage } from 'formik';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #ffffff;
  width: 55vw;
  height: 60vh;
  margin: calc(100vh / 9) auto 0px;
  text-align: center;
`;

export const DivLeftColumn = styled.div`
  float: left;
  width: 30vw;
  height: 60vh;
  border-radius: 10px 0px 0px 10px;
  box-shadow: 0px -15px 50px rgba(255, 255, 255, 0.8),
    0px 15px 50px rgba(0, 0, 0, 0.3);
  background-color: #373333;
`;

export const ImgLogin = styled.img`
  width: 16vw;
  height: 30vh;
  margin: 45px auto 1px auto;
`;

export const DivRightColumn = styled.div`
  float: right;
  width: 24vw;
  height: 60vh;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 0 10px 10px 0;
  background-color: #ffffff;
`;

export const Title = styled.h1`
  color: ${(props) => (props.primary ? 'white' : '#333333')};
  padding-top: 50px;
`;

export const SubTitle = styled.p`
  margin: 40px 30px 0px 30px;
  color: ${(props) => (props.primary ? '#333333' : 'white')};
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

export const LinkPassword = styled(Link)`
  width: 90px;
  height: 11px;
  font-family: Maven Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-decoration-line: underline;
  color: #152030;
  margin-left: 40px;
`;

export const RememberDiv = styled.div`
  //background-color: #1db954;
  margin: 1px auto;
`;

export const InputPassword = styled.input`
  width: 10px;
  height: 10px;
  margin-right: 2px;
  border: 1px solid #b0b0b0;
  box-sizing: border-box;
  border-radius: 2px;
`;

export const SpanPassword = styled.span`
  width: 58px;
  height: 11px;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #4c4c4c;
`;

export const ButtonLogin = styled.button`
  color: #fff;
  background-color: #009c86;
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
