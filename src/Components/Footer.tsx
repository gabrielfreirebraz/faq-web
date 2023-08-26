import {StylesFooter} from './Footer.css';


interface PropsFooter {
  title: string
}


export const DivFooter = (props: PropsFooter) => {

  console.log(props.title);

  return (
    <StylesFooter>
      <h2>Footer of my project</h2>

    </StylesFooter>
  );
}
