import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  background-color: darkslategray;

  & ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }

  & a {
      list-style: none;
      text-decoration: none;
      font-size: 20px;
      color: white;
      padding: 20px;
  }

  & .active {
    font-size: 25px;
    color: black;
    font-weight: 700;
  }
`;
