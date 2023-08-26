
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { StylesHeader } from "./Header.css";



interface PropsHeader {
  title: string
}


export const DivHeader = (props: PropsHeader) => {

  console.log(props.title);
  return (
    <StylesHeader>
      <h2>MIS FAQ</h2><br/>
      <h1>Perguntas frequentes</h1>


      <Form className='formHeader'>
        <Form.Group className="formHeaderGroup" controlId="controlInputGroup">
          <Form.Control type="text" placeholder="Adicione uma nova FAQ" />
        </Form.Group>        
        <Button variant="primary">Criar&nbsp;&nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
        </Button>
      </Form>
      
    </StylesHeader>
  );
}