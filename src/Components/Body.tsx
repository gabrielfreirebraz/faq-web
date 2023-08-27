import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {StylesBody} from './Body.css';
import { DivCard } from './Card';


const questions = [
  {
    id: 1,
    title: "Como saber se tenho acesso ao Portal MIS"
  },
  {
    id: 2,
    title: "Vejo erro de dados inválidos, mas digitei o login corretamente"
  },
  {
    id: 3,
    title: "Como saber se meu login de rede está bloqueado"
  },
  {
    id: 4,
    title: "Como prosseguir com o login no Portal MIS após resetar a senha de rede"
  },
  {
    id: 5,
    title: "Quais os principais erros do AD ao logar na rede"
  },
  {
    id: 6,
    title: "O problema persiste e não consigo autenticar no Portal MIS"
  }
]



export const DivBody = () => {


  return (
    <StylesBody>
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            {questions.map(v => <DivCard title={v.title} id={v.id}></DivCard>)}            
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>

    </StylesBody>
  );
}
