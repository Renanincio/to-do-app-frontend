import { useNavigate } from "react-router-dom";
import Logo from "../../public/images/hero.png";
import {
  ButtonContainer,
  HomeHeader,
  RegisterButton,
  SignInButton,
} from "./style";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HomeHeader>
      <div onClick={() => navigate("/")}>
        <img src={Logo} alt="logo do site" />
        <h1>Todoist</h1>
      </div>
      <ButtonContainer>
        <SignInButton onClick={() => navigate("/signin")}>Logar</SignInButton>

        <RegisterButton onClick={() => navigate("/register")}>
          Registrar
        </RegisterButton>
      </ButtonContainer>
    </HomeHeader>
  );
};
