import styled from "styled-components";

export const StylesCard = styled.div`
  .alert {
    margin: 0.3rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .alert .bi,
  .alert .form-switch,
  .alert .form-switch .form-check-label {
    background: transparent;
    cursor: pointer;
  }
  .alert .form-switch .form-check-label {
    font-size: 0.85rem;
  }
  .alert input[id^="switch"] {
    box-shadow: none;
  }
  .alert input[id^="switch"]:checked {
    background-color: var(--primary);
    border-color: var(--secondary);
  }
  .alert a {
    background: transparent;
    color: var(--white);
  }
`;
