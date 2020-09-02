import React from 'react';
import {
  Container,
  Wrapper,
  Row,
  Column,
  Link,
  Title,
  //ColumnImg,
  //ColumnSocial,
} from './styles';

//import InstagramIcon from '@material-ui/icons/Instagram';
//import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
//import LinkedInIcon from '@material-ui/icons/LinkedIn';
//import emailIcon from '../../assets/images/gmail.png';

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Column>
            <Title>Mapa</Title>
            <Link href="/">Home</Link>
            <Link href="#">Ajuda</Link>
            <Link href="#">Login</Link>
            <Link href="#">Cadastre-se</Link>
          </Column>
          <Column>
            <Title>Sobre</Title>
            <Link href="#">Sobre</Link>
          </Column>
          <Column>
            <Title>Sobre</Title>
            <Link href="#">
              O sistema é um gerenciador de pagamentos de planos colaborativos.
              A ideia surgiu quando assinei o plano familia do spotify e
              precisei gerenciar os pagamentos dos membros da familia,
              inicialmente o sistema terá um usuario que terá acesso a todos
              pagamentos.
            </Link>
          </Column>
        </Row>
      </Wrapper>
    </Container>
  );
}
