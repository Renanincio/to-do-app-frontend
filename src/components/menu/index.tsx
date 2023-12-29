import { useNavigate } from "react-router-dom";
import useAuthStore from "../../contexts/auth-context/UseAuthStore";
import { LogoutButton, MenuButton, MenuContainer, MenuLinks, UserContainer } from "./style";
import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";

export const Menu = () => {
  const { logout, user } = useAuthStore();

  const navigate = useNavigate();

  const [menuActivate, setMenuActivate] = useState(false);

  return (
    <>
      <MenuContainer menu={menuActivate}>
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
      <MenuButton onClick={() => setMenuActivate(!menuActivate)}>
      <MdMenuOpen />
      </MenuButton>
    </>
  );
};
