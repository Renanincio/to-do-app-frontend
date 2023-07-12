import { TasksCard } from "../../components/taskcard";
import { AddTaskCard, HeaderTasks, TasksCards, TasksContainer } from "./style";
import { api } from "../../lib/server";
import { useEffect, useState } from "react";
import { ITask } from "../../services/types";
import { Link } from "react-router-dom";

export const Completed = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const response = await api.get("/task/completed");

    return setTasks(response.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <TasksContainer>
        <HeaderTasks>
          <input type="text" placeholder="Pesquisar"></input>
        </HeaderTasks>

        <TasksCards>
          {tasks.length > 0 ? (
            tasks.map(({ task }: ITask) => (
              <TasksCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                date={task.date}
                favorite={task.favorite}
                completed={task.completed}
              />
            ))
          ) : (
            <div>Não há tarefas</div>
          )}
          <Link to="/create-task">
            <AddTaskCard>Criar tarefa</AddTaskCard>
          </Link>
        </TasksCards>
      </TasksContainer>
    </>
  );
};
