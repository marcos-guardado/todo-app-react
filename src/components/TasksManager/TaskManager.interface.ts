import { ITask } from "../../interfaces/task.interface";

export interface ITaskManager {
  tasks: ITask[];
  onMarkAsCompleted: (taskId: string, isCompleted: boolean) => void;
  onDelete: (taskId: string) => void;
}
