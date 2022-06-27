import React from "react";
import CustomButton from "../Button/CustomButton";
import "./TaskItem.css";

function TaskItem({ task: { id, task, completed }, onMarkAsCompleted,onDelete }, ref) {
  return (
    <section className="task-item-container">
      <section className="text-container">
        <input
          ref={ref}
          type="checkbox"
          checked={completed ? true : false}
          onChange={() => {
            onMarkAsCompleted(id);
          }}
        />
        <p className={completed ? "text-completed" : "text"}>{task}</p>
      </section>
      <section className="button-container">
        <CustomButton
          label="delete"
          onClick={() => {
            onDelete(id);
          }}
        />
      </section>
    </section>
  );
}

export default React.forwardRef(TaskItem);
