import TaskItem from "../TaskItem/TaskItem";
import { ITaskManager } from "./TaskManager.interface";

export default function TasksManager({
  tasks,
  onDelete,
  onMarkAsCompleted,
}: ITaskManager) {
  return (
    <section>
      <ul>
        {tasks &&
          tasks.map((task, i) => (
            <TaskItem
              taskToRender={task}
              onMarkAsCompleted={onMarkAsCompleted}
              onDelete={() => {
                onDelete(task._id);
              }}
              key={i}
            />
          ))}
      </ul>
    </section>
  );
}
