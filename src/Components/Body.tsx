import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {StylesBody} from './Body.css';
import { DivCard } from './Card';


interface PropsBody {
  title: string
}


export const DivBody = (props: PropsBody) => {

  console.log(props.title);

  return (
    <StylesBody>
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <DivCard title="Como saber se tenho acesso ao Portal MIS" id={1}></DivCard>
            <DivCard title="Vejo erro de usuário ou senha inválido, mas digitei o login corretamente" id={2}></DivCard>
            <DivCard title="Como saber se meu login de rede está bloqueado" id={3}></DivCard>
            <DivCard title="Como prosseguir com o login no Portal MIS após resetar a senha de rede" id={4}></DivCard>
            <DivCard title="Quais os principais erros do AD ao logar na rede" id={5}></DivCard>
            <DivCard title="O problema persiste e não consigo autenticar no Portal MIS" id={5}></DivCard>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>

    </StylesBody>
  );
}
