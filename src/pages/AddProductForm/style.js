import styled from "styled-components";

export const ProductFrom = styled.div`
  & form {
    /* margin: auto;*/
    width: 54%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & input,
  select {
    /* width: 100%; */
    padding: 10px;
    border: 2px dashed darkslategray;
    font-size: 18px;
  }

  & button {
    padding: 10px;
    /*width: 100px;*/
    background: darkslategray;
    color: #fff;
    font-size: 18px;
    border: none;
    margin: 10px;
    cursor: pointer;
    border-radius: 10px;
  }
`;
