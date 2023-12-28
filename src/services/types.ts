export interface ITask {
  task: {
    id: string;
    title: string;
    description: string;
    date: string;
    favorite: boolean;
    completed: boolean;
  };
}

export type Task = {
  id: string;
  title: string;
  description: string;
  date: string;
  favorite: boolean;
  completed: boolean;
};

export type GetTaskResponse = {
  data: Task[];
};

export type Data = {
  file: File;
  id: string;
  title: string;
  description: string;
  date: string;
  favorite: boolean;
  completed: boolean;
};
