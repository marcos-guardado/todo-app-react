import React from "react";
import CustomButton from "../Button/CustomButton";
import "./TaskItem.css";
import { ITaskItemComponent } from "./TaskItem.interface";

function TaskItem({
  taskToRender,
  onMarkAsCompleted,
  onDelete,
}: ITaskItemComponent) {
  const { _id, task, isCompleted } = taskToRender;
  return (
    <section className="task-item-container">
      <section className="text-container">
        <input
          type="checkbox"
          checked={isCompleted ? true : false}
          onChange={() => {
            onMarkAsCompleted(_id, isCompleted);
          }}
        />
        <p className={isCompleted ? "text-completed" : "text"}>{task}</p>
      </section>
      <section className="button-container">
        <CustomButton
          label="delete"
          onClick={() => {
            onDelete(_id);
          }}
        />
      </section>
    </section>
  );
}

export default TaskItem;
