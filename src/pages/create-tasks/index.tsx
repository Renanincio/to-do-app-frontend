import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../contexts/auth-context/UseAuthStore";
import { api } from "../../lib/server";
import { Data } from "../../services/types";
import { CreateTaskCard, CreateTaskContainer } from "./style";

export const CreateTask = () => {
  const today = new Date().toISOString().split("T")[0];

  const navigate = useNavigate();

  const preventDefault = (event: any) => {
    event.preventDefault();
  };

  const { register, handleSubmit } = useForm<Data>();

  const { user } = useAuthStore();
  const email = user?.email;

  const createTask = async (data: Data) => {
    await api.post("/task", data, {
      params: {
        email,
      },
    });
    navigate("/tasks");
  };

  return (
    <>
      <CreateTaskContainer>
        <CreateTaskCard>
          <form onSubmit={handleSubmit(createTask, preventDefault)}>
            <legend>
              <h1>Adicionar uma nova tarefa</h1>
            </legend>

            <label htmlFor="title">Título</label>
            <input
              type="text"
              required
              placeholder="Digite o título da tarefa"
              {...register("title")}
            />
            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              required
              placeholder="Digite a descrição da tarefa"
              {...register("description")}
            />
            <label htmlFor="date">Data</label>
            <input type="date" min={today} {...register("date")} required />

            <div>
              <input type="checkbox" {...register("favorite")} />
              <label htmlFor="favorite">Marcar como favorita</label>
            </div>
            <div>
              <input type="checkbox" {...register("completed")} />
              <label htmlFor="completed">Marcar como completa</label>
            </div>

            <button type="submit">Adicionar nova tarefa</button>
          </form>
        </CreateTaskCard>
      </CreateTaskContainer>
    </>
  );
};
