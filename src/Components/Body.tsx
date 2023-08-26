import {StylesBody} from './Body.css';


interface PropsBody {
  title: string
}


export const DivBody = (props: PropsBody) => {

  console.log(props.title);

  return (
    <StylesBody>
      <h2>Hello project</h2>

    </StylesBody>
  );
}
