import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../contexts/auth-context/UseAuthStore";
import { SignInContainer, SignInForm } from "./style";
import { Header } from "../../components/Header";

export const SignIn = () => {
  const navigate = useNavigate();

  const preventDefault = (event: any) => {
    event.preventDefault();
  };

  interface ILogin {
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const { login, error } = useAuthStore();

  const Login = async (data: ILogin) => {
    await login(data);
    navigate("/tasks");
  };

  return (
    <>
      <Header />
      <SignInContainer>
        <SignInForm onSubmit={handleSubmit(Login, preventDefault)}>
          <legend>
            <h1>Logar</h1>
          </legend>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            placeholder="Email"
            required
            {...register("email")}
          />
          
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            placeholder="Senha"
            required
            {...register("password")}
          />
          
          <button type="submit">Logar</button>
          
        </SignInForm>
      </SignInContainer>
    </>
  );
};
