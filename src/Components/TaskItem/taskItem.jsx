import React from "react";
import taskItem from "../TaskItem/taskItem.css";
import { MdDone } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const TaskItem = ({ todo, deleteItem, toggleItem }) => {
  return (
    <div className="container-item">
      <div className="items">
        <ul>
          <li>{todo.text}</li>
          <span className="icons">
            <MdDone onClick={() => toggleItem(todo.status)} size={25} />
            <MdEdit size={25} />
            <MdDelete onClick={() => deleteItem(todo.id)} size={25} />
          </span>
        </ul>
      </div>
    </div>
  );
};

export default TaskItem;
