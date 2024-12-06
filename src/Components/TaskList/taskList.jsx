import React, { useState, useEffect } from "react";
import taskList from "../TaskList/taskList.css";
import TaskForm from "../TaskForm/taskForm";
import TaskItem from "../TaskItem/taskItem";

const TaskList = () => {
  // Liste des tâches
  const [todos, setTodos] = useState([]);

  // Fonction d'ajout de tâche
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  //  Supprimer une tâche
  const deleteItem = (id) => {
    const deleteTask = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTask);
  };

  // Marquer comme terminé
  const toggleItem = (index) => {
    setTodos(
        todos.map((todo) => 
            todo.id === index.id ? {...todo, status: !todo.status} : todo
        )
    )
  }

  // Récupération des tâches stockées
  useEffect(() => {
    const saveTask = JSON.parse(localStorage.getItem("todos")) || [];
    if(saveTask.length > 0) {
      setTodos(saveTask);
    }
  },[]);


  // Sauvegarde des tâches
  useEffect(() => {
    todos.length > 0 ? localStorage.setItem("todos", JSON.stringify(todos)) : localStorage.removeItem("todos")
  },[todos])

  return (
    <div className="container-list">
      {/* Barre d'ajout de tâches */}
      <TaskForm addTodo={addTodo} />
      {/* La liste d'Items */}
      <div className="item-list">
        {todos.map((todo) => {
          return <TaskItem todo={todo} key={todo.id} deleteItem={deleteItem} toggleItem={toggleItem} />;
        })}
      </div>
    </div>
  );
};

export default TaskList;
