import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import useAuthStore from "../../contexts/auth-context/UseAuthStore";
import { SignInContainer, SignInForm } from "./style";

export const Register = () => {
  const navigate = useNavigate();

  const preventDefault = (event: any) => {
    event.preventDefault();
  };

  interface IRegister {
    name: string;
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>();

  const { signup, error } = useAuthStore();

  const Register = async (data: IRegister) => {
    await signup(data);
    navigate("/signin");
  };

  return (
    <>
      <Header />
      <SignInContainer>
        <SignInForm onSubmit={handleSubmit(Register, preventDefault)}>
          <legend>
            <h1>Registrar-se</h1>
          </legend>

          <label htmlFor="Name">Nome:</label>
          <input
            type="Name"
            placeholder="Nome"
            required
            {...register("name")}
          />

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

          <button type="submit">Registrar-se</button>
        </SignInForm>
      </SignInContainer>
    </>
  );
};
