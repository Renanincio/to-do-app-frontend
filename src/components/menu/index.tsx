import { MenuContainer, MenuLinks, UserContainer } from "./style";
import UserImg from "../../public/images/pexels-photo-1674666.jpeg";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <MenuContainer>
        <UserContainer>
          <p>Olá, John Doe</p>
          <img src={UserImg} alt="foto de usuário"></img>
        </UserContainer>

        <button>
          <Link to="/create-task" className="menu-link">
            Criar Tarefa
          </Link>
        </button>

        <MenuLinks>
          <Link to="/" className="menu-link">
            <li>Tarefas</li>
          </Link>

          <Link to="/completed" className="menu-link">
            <li>Completas</li>
          </Link>

          <Link to="/favorites" className="menu-link">
            <li>Favoritas</li>
          </Link>
        </MenuLinks>
      </MenuContainer>
    </>
  );
};
