import React from "react";

import style from "../../App.module.css";
import TodoForms from "../TodoForms/TodoForms";
import TodoItems from "../TodoItems/TodoItems";
import CheckedTask from "../CheckedTask/CheckedTask";
import RemoveChecked from "../RemoveChecked/RemoveChecked";

const Todos = () => {
  return (
    <>
      <h1 className={style.todoTitle}>todolist</h1>
      <TodoForms />
      <TodoItems />
      <div className={style.interaction}>
        <CheckedTask />
        <RemoveChecked />
      </div>
    </>
  );
};

export default Todos;
