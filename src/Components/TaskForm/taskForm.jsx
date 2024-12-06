import React, { useState } from "react";
import taskForm from "../TaskForm/taskForm.css";

const TaskForm = ({ addTodo }) => {
  // Liste des tâches
  const [newTask, setNewTask] = useState({});
  // Nouvelle tâche
  const [inputTask, setInputTask] = useState("");

  // Sélection d'option
  const [option, setOption] = useState("all");
  // Changer une option
  const [changer, setChanger] = useState([]);

  // Fonction de mise à jour
  const handleChange = (e) => {
    setInputTask(e.target.value);
    const todoChange = {
      id: Date.now(),
      text: e.target.value,
      status: false,
    };
    setNewTask(todoChange);
  };

  // Fonction d'ajout de tâche
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTask);
    setInputTask("");
  };

  // Fonction de sélection d'option
  const selectOption = () => {
    const selectChange = changer.filter((todo) => {
      if (option === "status") return todo.status;
      if (option === "actives") return todo.actives;
      return true;
    });
    setChanger(selectChange);
  };

  return (
    <div className="container-form">
      <div className="input-addTask">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="inputTodo"
            value={inputTask}
            onChange={handleChange}
            className="input-add"
            placeholder="Entrer une tâche"
            required
          />
          <button className="btn-add" type="submit">
            Ajouter
          </button>
        </form>
      </div>
      <div className="select">
        <select name="todos" onChange={selectOption}>
          <option value="all">Toutes</option>
          <option value="status">Terminées</option>
          <option value="actives">Actives</option>
        </select>
      </div>
    </div>
  );
};

export default TaskForm;
