import axios from "axios";

interface INewTask {
  task: string;
  isCompleted: boolean;
}

export const requestMaker = async (
  url: string,
  action: "get" | "post" | "patch" | "delete",
  body?: any
) => {
  const { data } = await axios[action](url, body ? body : null);
  return data;
};

export const getAllTasks = () => {
  const url = "http://localhost:5000/api/getAll";
  return requestMaker(url, "get");
};

export const searchTask = (termToSearch: string) => {
  if (termToSearch.trim() === "") return;
  const url = `http://localhost:5000/api/search/${termToSearch}`;
  return requestMaker(url, "get");
};

export const createNewTask = (newTask: INewTask) => {
  const url = "http://localhost:5000/api/post";
  return requestMaker(url, "post", newTask);
};

export const updateTask = (taskId: string, isCompleted: boolean) => {
  const url = `http://localhost:5000/api/update/${taskId}`;
  return requestMaker(url, "patch", {
    isCompleted: isCompleted,
  });
};

export const deleteTask = (taskId: string) => {
  const url = `http://localhost:5000/api/delete/${taskId}`;
  return requestMaker(url, "delete");
};
