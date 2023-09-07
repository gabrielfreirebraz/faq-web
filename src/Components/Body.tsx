import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import {v4 as uuidv4} from 'uuid';

import { StylesBody } from './Body.css';
import { DivCard } from './Card';
import { useEffect, useState } from 'react';
import { DivHeader } from './Header';





const questions = [
  {
    id: uuidv4(),
    title: "Como saber se tenho acesso ao Portal MIS",
    isComplete: false
  },
  {
    id: uuidv4(),
    title: "Vejo erro de dados inválidos e digitei o login corretamente",
    isComplete: false
  },
  {
    id: uuidv4(),
    title: "Como saber se meu login de rede está bloqueado",
    isComplete: false
  },
  {
    id: uuidv4(),
    title: "Como prosseguir com o login no Portal MIS após resetar a senha de rede",
    isComplete: true
  },
  {
    id: uuidv4(),
    title: "Quais os principais erros do AD ao logar na rede",
    isComplete: false
  },
  {
    id: uuidv4(),
    title: "O problema persiste e não consigo autenticar no Portal MIS",
    isComplete: true
  }
]



export const DivBody = () => {
  const [faqs, setFaqs] = useState(questions);
  const [totalChecks, setTotalChecks] = useState(0);


  useEffect(() => {

    const countChecks = ()=>{ 
      return faqs.reduce(
        (i,currentCard) => {
  
        console.log("sum: "+i);
  
        //return i + (currentCard.isComplete ? 1 : 0)
        return i + (+currentCard.isComplete);
      }, 0);
    }

    const t = countChecks();
    setTotalChecks(t);
  
    console.log("t: "+t);
    
  },[faqs]);

  
  function createCard(value: string) {

      const newFaq = {id:uuidv4(), title:value, isComplete: false};

      setFaqs([...faqs, newFaq]);
      console.log(value);
  }


  function deleteCard(id: string) {
    const newQuestions = faqs.filter((card)=>{
    
      return card.id !== id; 
    });
    setFaqs(newQuestions);
  }

  function changeCard(id: string) {

    const newQuestions = faqs.map((card) => {
      if (id === card.id)      
        card.isComplete = !card.isComplete;

      return card;
    });
    setFaqs(newQuestions);
  }

  return (
    <>
      <DivHeader title="FAQ" onCreateCard={createCard} />

      <StylesBody>
        <Container>
          <Row>
              <Col md={3}></Col>
              <Col md={6} id="col-counter">
                <label className='lbl-primary'>FAQ's criadas&nbsp;<Badge bg="primary">{faqs.length}</Badge></label>
                <label className='lbl-primary'>Publicadas&nbsp;<Badge bg="primary">{totalChecks} de {faqs.length}</Badge></label>
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
    </>
  );
}
