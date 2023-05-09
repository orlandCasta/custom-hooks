/* 
El hook useReducer en React se utiliza para manejar el estado de un componente de una manera más sofisticada y escalable. Proporciona una alternativa al uso del hook useState cuando el estado del componente es complejo y necesita realizar actualizaciones basadas en acciones predefinidas.
useReducer se basa en el patrón de diseño de reducción (reducer pattern) que se encuentra en muchas aplicaciones basadas en la arquitectura Flux o Redux. Toma dos argumentos: el reducer (reductor) y el estado inicial, y devuelve el estado actualizado junto con una función dispatch para despachar acciones al reductor.
El reducer es una función pura que especifica cómo el estado actual se transforma en el siguiente estado en respuesta a una acción. Toma el estado actual y una acción como argumentos, y devuelve un nuevo estado basado en la acción. El estado puede ser un objeto, una matriz o cualquier otro tipo de dato.
*/

import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todo, dispatch] = useReducer(todoReducer, [], init);
  const todosCount = todo.length;
  const todosPending = todo.filter((todo) => !todo.done).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "add",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDelete = (id) => {
    const action = {
      type: "delete",
      payload: id,
    };
    dispatch(action);
  };

  const handleDone = (id) => {
    const action = {
      type: "done",
      payload: id,
    };
    dispatch(action);
  };

  return {
    handleNewTodo,
    handleDelete,
    handleDone,
    todo,
    todosCount,
    todosPending,
  };
};
