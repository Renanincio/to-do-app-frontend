import { useForm } from "react-hook-form";
import { api } from "../../lib/server";
import { CreateTaskCard, CreateTaskContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { Data } from "../../services/types";

export const CreateTask = () => {
  const today = new Date().toISOString().split("T")[0];

  const navigate = useNavigate();

  const preventDefault = (event: any) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();

  const createTask = async (data: Data) => {
    await api.post("/task", data);
    navigate("/");
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
              name="title"
              required
              placeholder="Digite o título da tarefa"
              {...register("title")}
            />
            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              name="description"
              required
              placeholder="Digite a descrição da tarefa"
              {...register("description")}
            />
            <label htmlFor="date">Data</label>
            <input
              type="date"
              min={today}
              name="date"
              {...register("date")}
              required
            />

            <div>
              <input
                type="checkbox"
                name="favorite"
                {...register("favorite")}
              />
              <label htmlFor="favorite">Marcar como favorita</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="completed"
                {...register("completed")}
              />
              <label htmlFor="completed">Marcar como completa</label>
            </div>

            <button type="submit">Adicionar nova tarefa</button>
          </form>
        </CreateTaskCard>
      </CreateTaskContainer>
    </>
  );
};
