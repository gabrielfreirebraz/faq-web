import styled from "styled-components";

export const StylesCard = styled.div`
  .alert {
    margin: 0.3rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .alert svg,
  .alert .form-switch,
  .alert .form-switch .form-check-label {
    background: transparent;
  }
  .alert .form-switch .form-check-label {
    font-size: 0.85rem;
  }
  input[id^="switch"] {
    box-shadow: none;
  }
  input[id^="switch"]:checked {
    background-color: var(--primary);
    border-color: var(--secondary);
  }
`;
