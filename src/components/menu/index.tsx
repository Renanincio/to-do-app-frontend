import { useNavigate } from "react-router-dom";
import useAuthStore from "../../contexts/auth-context/UseAuthStore";
import { LogoutButton, MenuContainer, MenuLinks, UserContainer } from "./style";

export const Menu = () => {
  const { logout, user } = useAuthStore();

  const navigate = useNavigate();

  return (
    <>
      <MenuContainer>
        <UserContainer>
          <p>Olá, {user?.name}</p>
        </UserContainer>

        <LogoutButton onClick={() => {
          logout()
          navigate('/')
        }}>Sair</LogoutButton>

        <MenuLinks>
          <li className="menu-link" onClick={async() => {
            await navigate("/")
            location.reload()
            }
            }>Tarefas</li>

          <li className="menu-link" onClick={() => navigate("/completed")}>
            Completas
          </li>

          <li className="menu-link" onClick={() => navigate("/favorites")}>
            Favoritas
          </li>
        </MenuLinks>
      </MenuContainer>
    </>
  );
};
