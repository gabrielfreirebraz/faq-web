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
    background: transparent;
    border-radius: 0.4rem;
    margin: 2rem;
    margin-bottom: -3.5rem;
    z-index: 1;
    display: flex;
    gap: 0.4rem;
    align-items: stretch;
    justify-content: stretch;
  }
  .formHeader input[type="text"] {
    border-radius: 0.4rem;
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
    width: 34rem;
  }
  .formHeader .formHeaderGroup {
    background: transparent;
  }
  .formHeader input[type="text"]:focus {
    border-color: var(--secondary);
    outline: none;
    box-shadow: none;
  }
  .formHeader .btn {
    background: var(--secondary-3);
    border-color: var(--secondary-3);
    font-size: 0.9rem;
  }
  .formHeader .btn:hover {
    background: var(--secondary-2);
    border-color: var(--secondary-2);
  }
  .formHeader .btn svg::before {
    content: "&nbsp;";
  }
  .formHeader .btn svg {
    color: var(--white);
    background: transparent;
    margin-top: -0.1rem;
  }
`;
