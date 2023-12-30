import { useForm } from "react-hook-form";
import { api } from "../../lib/server";
import { UpdateTaskCard, UpdateTaskContainer } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Data } from "../../services/types";

export const UpdateTask = () => {
  const today = new Date().toISOString().split("T")[0];

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<Data>();

  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/task/${id}`)
      .then((Response) => reset(Response.data))
  }, [id]);

  const preventDefault = (event: any) => event.preventDefault;
  const updateTask = async(data: Data) => {
    await api.put(`/task/${id}`, data);
    await navigate("/");
    location.reload();
  };

  return (
    <>
      <UpdateTaskContainer>
        <UpdateTaskCard>
          <form onSubmit={handleSubmit(updateTask, preventDefault)}>
            <legend>
              <h1>Atualizar tarefa</h1>
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
            <input
              type="date"
              min={today}
              
              {...register("date")}
              required
            />

            <div>
              <input
                type="checkbox"
                
                {...register("favorite")}
              />
              <label htmlFor="favorite">Marcar como favorita</label>
            </div>
            <div>
              <input
                type="checkbox"
                
                {...register("completed")}
              />
              <label htmlFor="completed">Marcar como completa</label>
            </div>

            <button type="submit">Atualizar tarefa</button>
          </form>
        </UpdateTaskCard>
      </UpdateTaskContainer>
    </>
  );
};

