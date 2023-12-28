import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/server";
import {
  CardOptions,
  CompletedCard,
  TaskCard,
  TaskCardContent,
  TaskCardDate,
  TaskCardIcons,
  TaskCardText,
  UncompletedCard,
} from "./style";
import {
  AiFillEdit,
  AiFillDelete,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";

interface TaskProps {
  id?: string;
  title: string;
  description: string;
  date: string;
  favorite: boolean;
  completed: boolean;
}

export const TasksCard = ({
  id,
  title,
  description,
  date,
  favorite,
  completed,
}: TaskProps) => {
  const deleteTask = async (id?: number) => {
    await api.delete(`task/${id}`);
    location.reload();
  };

  const navigate = useNavigate();

  return (
    <>
      <TaskCard>
        <TaskCardContent>
          <TaskCardText>
            <h1>{title}</h1>
            <p>{description}</p>
          </TaskCardText>

          <TaskCardDate>{date}</TaskCardDate>
        </TaskCardContent>
        <TaskCardIcons>
          {completed ? (
            <CompletedCard>Completa</CompletedCard>
          ) : (
            <UncompletedCard>Incompleta</UncompletedCard>
          )}
          <CardOptions>
            <li
              className="cardLink"
              onClick={() => navigate(`/update-task/${id}`)}
            >
              <AiFillEdit />
            </li>

            <button onClick={() => deleteTask(id)}>
              <li>
                <AiFillDelete />
              </li>
            </button>
            <li>
              {!favorite ? (
                <AiOutlineStar />
              ) : (
                <AiFillStar className={"yellow"} />
              )}
            </li>
          </CardOptions>
        </TaskCardIcons>
      </TaskCard>
    </>
  );
};
