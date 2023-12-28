import { useNavigate } from "react-router-dom";
import useAuthStore from "../../contexts/auth-context/UseAuthStore";
import OgEn from "../../public/images/og-en.png";
import PromoEn from "../../public/images/promo-en.png";
import {
  ButtonContainer,
  HomeContainer,
  HomeContent,
  LoginSection,
  RegisterButton,
  SignInButton,
} from "./style";
import { Header } from "../../components/Header";

export const Home = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) return navigate("/tasks");

  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <main>
          <h1>
            O Todoist é um website gerenciador de tarefas gratuito simples de se
            usar e que tem todas as funcionalidades necessárias para te garantir
            um controle completo das suas atividades e lhe possibilitar
            gerenciar melhor seu tempo.
          </h1>
        </main>

        <img src={PromoEn} alt="" />
      </HomeContent>

      <LoginSection>
        <div>
          <h1>Acesse ou crie sua conta e comece ter resultados ainda hoje!</h1>
          <ButtonContainer>
            <SignInButton onClick={() => navigate("/signin")}>
              Logar
            </SignInButton>

            <RegisterButton onClick={() => navigate("/register")}>
              Registrar
            </RegisterButton>
          </ButtonContainer>
        </div>

        <img src={OgEn} alt="" />
      </LoginSection>
    </HomeContainer>
  );
};
