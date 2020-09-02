import styled from 'styled-components';
import colors from '../../UI/Colors';

export const Container = styled.footer`
  margin-top: 70px;
  padding: 40px 60px;
  background: ${colors.blue_primary};
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
  //background: ${colors.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 90vw;
  margin: 0 auto;
  //background: red;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 50px;
  //background: green;
`;

export const Row = styled.div`
  //background: pink;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #9b9999;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  margin-bottom: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #9b9999;
`;
