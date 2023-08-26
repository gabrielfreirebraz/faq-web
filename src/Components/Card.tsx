import Alert from 'react-bootstrap/Alert';
import {StylesCard} from './Card.css';

interface PropsCard {
  title: string
}

export const DivCard = (props: PropsCard) => {

  console.log(props.title);

  return (
    <StylesCard>
      
      
        <Alert key="1" variant="primary">
          This is a alert—check it out!
        </Alert>

    </StylesCard>
  );
}
