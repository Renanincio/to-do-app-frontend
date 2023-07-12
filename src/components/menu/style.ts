import { styled } from "styled-components";

export const MenuContainer = styled.div`
  min-width: 200px;
  min-height: 100vh;
  background-color: #141e33;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 34px 52px;

  button {
    width: 230px;
    height: 50px;
    border-radius: 15px;
    background-color: #5b21b6;
    margin: 30px auto;
    transition: all 0.3s;
  }

  button .menu-link {
    color: white;
  }

  button:hover {
    background-color: #4c1d95;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 20px;
    color: white;
    margin-right: 18px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const MenuLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;

  li {
    padding: 9px 0;
    width: 100%;
    margin: 3px 0;
  }

  li:hover {
    background-color: #1a253a;
    border-right: 4px solid #e2e8f0;
  }

  .menu-link {
    color: #949686;
    transition: all 0.3s;
  }

  .menu-link:hover {
    color: white;
  }
`;
