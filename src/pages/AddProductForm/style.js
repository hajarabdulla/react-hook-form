import styled from "styled-components";

export const ProductFrom = styled.div`
  & form {
    width: 54%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & input,
  select {
    padding: 10px;
    border: 2px dashed darkslategray;
    font-size: 18px;
  }

  & button {
    padding: 10px;
    background: darkslategray;
    color: #fff;
    font-size: 18px;
    border: none;
    margin: 10px;
    cursor: pointer;
    border-radius: 10px;
  }
`;
