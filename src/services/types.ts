export interface ITask {
  task: {
    id: number;
    title: string;
    description: string;
    date: string;
    favorite: boolean;
    completed: boolean;
  };
}

export type Task = {
  id: number;
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
  id: number;
  title: string;
  description: string;
  date: string;
  favorite: boolean;
  completed: boolean;
};
