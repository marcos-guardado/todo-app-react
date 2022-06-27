import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./App.css";
import { requestMaker } from "./utils/requestMaker";
import { Header } from "./components/Header/Header";
import CustomInput from "./components/CustomInput/CustomInput";
import TasksManager from "./components/TasksManager/TasksManager";
import Loader from "./components/Loader/Loader";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = "http://localhost:5000/tasks";

  const newTaskInput = useRef(null);
  const filterKeyInput = useRef(null);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    setTasks(await requestMaker(url, "get"));
    setFilteredTasks(await requestMaker(url, "get"))
  };

  const handleNewTask = () => {
    const {
      current: { value },
    } = newTaskInput;

    if (!value) return;
    const newTask = {
      id: tasks.length + 1,
      task: value,
      completed: false,
    };

    axios.post(url, newTask).then(() => {
      setIsLoading(true);
      getTasks();
      setIsLoading(false);
    });

    newTaskInput.current.value = "";
  };

  const handleFilter = async () => {
    const {
      current: { value },
    } = filterKeyInput;
    if (!value) getTasks();
    setFilteredTasks(
      tasks.filter(({ task }) => task.toLowerCase().match(value))
    );
  };

  return (
    <div className="App">
      <section>
        <Header title="todo app" />
        <CustomInput
          ref={newTaskInput}
          taskText="Add new task"
          buttonText="add task"
          handleSubmit={handleNewTask}
        />
        <CustomInput
          ref={filterKeyInput}
          taskText="Filter tasks"
          onChange={handleFilter}
          handleSubmit={handleFilter}
        />
      </section>
      <section>
        {isLoading ? (
          <Loader />
        ) : (
          <TasksManager
            onMarkAsCompleted={getTasks}
            tasks={tasks}
            filteredTasks={filteredTasks}
          />
        )}
      </section>
    </div>
  );
}

export default App;
