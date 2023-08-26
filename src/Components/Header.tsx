
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
        <Button variant="primary">Criar</Button>
      </Form>
      
    </StylesHeader>
  );
}