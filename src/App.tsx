// React and libraries
import { useEffect, useState } from "react";
// Utils and CSS
import "./App.css";
import {
  createNewTask,
  deleteTask,
  getAllTasks,
  searchTask,
  updateTask,
} from "./utils/requestMaker";
// Components
import CustomInput from "./components/CustomInput/CustomInput";
import TasksManager from "./components/TasksManager/TasksManager";
import { Header } from "./components/Header/Header";
import { Loader } from "./components/Loader/Loader";
// Interfaces
import { ITask } from "./interfaces/task.interface";

function App() {
  const [taskContent, setTaskContent] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    setIsLoading(true);
    const data = await getAllTasks();
    setTasks(data);
    setIsLoading(false);
  };

  const handleNewTask = async () => {
    if (!taskContent) return;
    const task = {
      task: taskContent,
      isCompleted: false,
    };
    await createNewTask(task);
    setTaskContent("");
    getTasks();
  };

  const handleFilter = async ({ target: { value } }: any) => {
    if (!value) getTasks();
    setIsLoading(true);
    setTasks(await searchTask(value));
    setIsLoading(false);
  };

  const handleDelete = async (taskId: string) => {
    await deleteTask(taskId);
    getTasks();
  };

  const handleChange = async (taskId: string, isCompleted: boolean) => {
    await updateTask(taskId, !isCompleted);
    getTasks();
  };

  return (
    <div className="App">
      <section>
        <Header title="todo app" />
        <CustomInput
          label="Add task"
          taskText="Add new task"
          onChange={({ target: { value } }) => setTaskContent(value)}
          value={taskContent}
          onClick={handleNewTask}
          buttonText="Add task"
        />
        <CustomInput taskText="Filter tasks" onChange={handleFilter} />
      </section>
      <section>
        {isLoading ? (
          <Loader />
        ) : (
          <TasksManager
            onDelete={handleDelete}
            onMarkAsCompleted={handleChange}
            tasks={tasks}
          />
        )}
      </section>
    </div>
  );
}

export default App;
