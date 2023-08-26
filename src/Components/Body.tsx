import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {StylesBody} from './Body.css';


interface PropsBody {
  title: string
}


export const DivBody = (props: PropsBody) => {

  console.log(props.title);

  return (
    <StylesBody>
      <Container>
        <Row>
          <Col>
          
            {/* <h2>Hello project</h2> */}
          
          </Col>
        </Row>
      </Container>

    </StylesBody>
  );
}
