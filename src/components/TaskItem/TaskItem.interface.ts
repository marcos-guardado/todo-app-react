import { ITask } from "../../interfaces/task.interface";

export interface ITaskItemComponent {
  taskToRender: ITask;
  onMarkAsCompleted: (taskId: string, isCompleted: boolean) => void;
  onDelete: (id: string) => void;
}
