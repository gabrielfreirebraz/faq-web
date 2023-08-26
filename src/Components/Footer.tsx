import {StylesFooter} from './Footer.css';


interface PropsFooter {
  title: string
}


export const DivFooter = (props: PropsFooter) => {

  console.log(props.title);

  return (
    <StylesFooter>
      <footer>Footer of my project</footer>

    </StylesFooter>
  );
}
