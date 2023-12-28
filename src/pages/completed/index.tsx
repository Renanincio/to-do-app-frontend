import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../../GlobalStyle";
import { Menu } from "../../components/menu";
import { TasksCard } from "../../components/taskcard";
import useAuthStore from "../../contexts/auth-context/UseAuthStore";
import { api } from "../../lib/server";
import { Task } from "../../services/types";
import { AddTaskCard, HeaderTasks, TasksCards, TasksContainer } from "./style";


export const Completed = () => {
  const [tasks, setTasks] = useState([]);

  const { user } = useAuthStore();
  const email = user?.email;
  const navigate = useNavigate();

  const getTasks = async () => {
    const response = await api.get("/task/completed", {
      params: {
        email,
      },
    });

    return setTasks(response.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <PageContainer>
      <Menu />
      <TasksContainer>
        <HeaderTasks>
          <input type="text" placeholder="Pesquisar"></input>
        </HeaderTasks>

        <TasksCards>
          {tasks.length > 0 ? (
            tasks.map((task: Task) => (
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
        
            <AddTaskCard onClick={() => navigate("/create-task")}>Criar tarefa</AddTaskCard>
         
        </TasksCards>
      </TasksContainer>
    </PageContainer>
  );
};
