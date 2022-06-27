import { useRef } from "react";
import { requestMaker } from "../../utils/requestMaker";
import TaskItem from "../TaskItem/TaskItem";

export default function TasksManager({
  tasks,
  filteredTasks,
  onMarkAsCompleted,
}) {
  const completedInput = useRef(null);
  const url = "http://localhost:5000/tasks";
  const handleChange = async (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    await requestMaker(`${url}/${taskId}`, "patch", {
      ...task,
      completed: !task.completed,
    }).then(() => {
      onMarkAsCompleted();
    });
  };
  const handleDelete = (taskId) => {
    requestMaker(`${url}/${taskId}`, "delete").then(() => {
      onMarkAsCompleted();
    });
  };
  return (
    <section>
      <ul>
        {tasks &&
          filteredTasks.length === 0 &&
          tasks.map((task, i) => (
            <TaskItem
              onMarkAsCompleted={handleChange}
              ref={completedInput}
              key={i}
              task={task}
            />
          ))}
        {filteredTasks &&
          filteredTasks.map((task, i) => (
            <TaskItem
              onMarkAsCompleted={handleChange}
              onDelete={handleDelete}
              ref={completedInput}
              key={i}
              task={task}
            />
          ))}
      </ul>
    </section>
  );
}
