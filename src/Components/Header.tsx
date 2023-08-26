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
    </StylesHeader>
  );
}