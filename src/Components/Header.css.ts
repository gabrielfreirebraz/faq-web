import styled from "styled-components";

export const StylesHeader = styled.div`
  border: solid 1px #000;
  background: var(--primary);
  width: 100%;
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.2rem;
    color: #fff;
    background: none;
    font-weight: 400;
  }
  h2 {
  }

  .formHeader {
    border-radius: 0.4rem;
    margin: 2rem;
    margin-bottom: -3.5rem;
    width: 35rem;
    z-index: 1;
  }
  .formHeader input,
  .formHeader input:focus {
    border-radius: 0.4rem;
    padding: 1rem;
    outline: none;
    box-shadow: none;
    font-size: 0.9rem;
  }
  .formHeader .formHeaderGroup {
    background: transparent;
  }
  .formHeader input:focus {
    border: solid 1px var(--secondary);
  }
`;
