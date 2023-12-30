import  styled  from "styled-components";

type MenuVisible = {
  sidebar: boolean;
};

export const LogoutButton = styled.button`
  border: none;
  color: white;
  background-color: none;
  cursor: pointer;
`;

export const MenuContainer = styled.div<MenuVisible>`
  min-width: 300px;
  min-height: 100vh;
  background-color: #141e33;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  button {
    width: 230px;
    height: 50px;
    border-radius: 15px;
    background-color: #5b21b6;
    margin: 6px auto;
    transition: all 0.3s;
  }

  button .menu-link {
    color: white;
  }

  button:hover {
    background-color: #4c1d95;
  }

  @media (max-width: 768px) {
    margin-left: ${(props) => (props.sidebar ? "0" : "-300px")};
    transition: all 0.3s;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 36px 0 12px;

  p {
    font-size: 20px;
    color: white;
    margin-right: 18px;
    text-overflow: clip;
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
  margin-top: 12px;

  li {
    padding: 9px 12px;
    width: 100%;
    margin: 3px 0;
    cursor: pointer;
  }

  li:hover {
    background-color: #1a253a;
    border-right: 4px solid #e2e8f0;
  }

  .menu-link {
    color: #949686;
    transition: color 0.3s;
  }

  .menu-link:hover {
    color: white;
  }
`;

export const MenuButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  background-color: #141e33;
  color: white;
  margin: 16px;
`;
