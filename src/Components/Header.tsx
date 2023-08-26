import { StylesHeader } from "./Header.css";



interface PropsHeader {
  title: string
}


export const DivHeader = (props: PropsHeader) => {

  console.log(props.title);
  return (
    <StylesHeader>
      <h1>MIS FAQ</h1>

    </StylesHeader>
  );
}