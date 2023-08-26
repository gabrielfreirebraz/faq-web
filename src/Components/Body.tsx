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
            <DivCard title=""></DivCard>
            <DivCard title=""></DivCard>
            <DivCard title=""></DivCard>
            <DivCard title=""></DivCard>
            <DivCard title=""></DivCard>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>

    </StylesBody>
  );
}
