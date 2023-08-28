import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import { StylesBody } from './Body.css';
import { DivCard } from './Card';
import { useEffect, useState } from 'react';




const questions = [
  {
    id: 1,
    title: "Como saber se tenho acesso ao Portal MIS",
    isComplete: false
  },
  {
    id: 2,
    title: "Vejo erro de dados inválidos e digitei o login corretamente",
    isComplete: false
  },
  {
    id: 3,
    title: "Como saber se meu login de rede está bloqueado",
    isComplete: false
  },
  {
    id: 4,
    title: "Como prosseguir com o login no Portal MIS após resetar a senha de rede",
    isComplete: true
  },
  {
    id: 5,
    title: "Quais os principais erros do AD ao logar na rede",
    isComplete: false
  },
  {
    id: 6,
    title: "O problema persiste e não consigo autenticar no Portal MIS",
    isComplete: false
  }
]



export const DivBody = () => {

  const [faqs] = useState(questions);

  useEffect(() => {



  },[])

  return (
    <StylesBody>
      <Container>
        <Row>
            <Col md={3}></Col>
            <Col md={6} id="col-counter">
              <label className='lbl-primary'>FAQ's criadas&nbsp;<Badge bg="primary">{faqs.length}</Badge></label>
              <label className='lbl-primary'>Publicadas&nbsp;<Badge bg="primary">1 de {faqs.length}</Badge></label>
            </Col>

            <Col md={3}></Col>
        </Row>

        {/* <Row><Col>&nbsp;</Col></Row> */}

        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            {questions.map(v => <DivCard key={v.id} title={v.title} id={v.id} complete={v.isComplete}></DivCard>)}            
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>

    </StylesBody>
  );
}
