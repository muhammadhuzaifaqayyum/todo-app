/* eslint-disable react/prop-types */
import DeleteIcon from "../assets/deleteicon.png";
import TikIcon from "../assets/tik.png";
import "./todo.css";
import { useState } from "react";

export const TodoItem = ({ title, deleteTodo, completeTodo }) => {
  const [color, setColor] = useState(false);
  const doneTodo = () => {
    setColor(!color);
  };
  return (
    <div className="todo-item" id="todo-1">
      <p className={color ? "checked" : "todo-task-title"} onClick={doneTodo}>
        {title}
      </p>
      <img className="todo-tik-icon" src={TikIcon} onClick={doneTodo} />
      <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
    </div>
  );
};
