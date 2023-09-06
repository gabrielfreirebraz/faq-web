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
  const [faqs, setFaqs] = useState(questions);
  const [totalChecks, setTotalChecks] = useState(1);




  useEffect(() => {

    const t = countChecks();

    setTotalChecks(t);
    console.log("other load and total is: "+totalChecks);

  },[faqs]);

  

  const countChecks = ()=>{ 
    return faqs.reduce(
      (i,currentCard) => {

      console.log("sum: "+i);

      //return i + (currentCard.isComplete ? 1 : 0)
      return i + (+currentCard.isComplete);
    }, 0);
  }

  function deleteCard(id: number) {
    const newQuestions = faqs.filter((card)=>{
    
      return card.id !== id; 
    });
    setFaqs(newQuestions);
  }

  function changeCard(id: number) {

    const newQuestions = faqs.map((card) => {
      if (id === card.id)      
        card.isComplete = !card.isComplete;

      return card;
    });
    setFaqs(newQuestions);
  }

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

        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            {faqs.map(v => <DivCard onDeleteCard={deleteCard} onChangeCard={changeCard} key={v.id} title={v.title} id={v.id} complete={v.isComplete}></DivCard>)}            
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>

    </StylesBody>
  );
}
