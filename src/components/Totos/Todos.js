import React from "react";

import style from "../../App.module.css";
import TodoForms from "../TodoForms/TodoForms";
import TodoItems from "../TodoItems/TodoItems";
import CheckedTask from "../CheckedTask/CheckedTask";
import RemoveChecked from "../RemoveChecked/RemoveChecked";

const Todos = ({ userItem, setUserItem, userItems, setUserItems }) => {
  return (
    <>
      <h1 className={style.todoTitle}>todolist</h1>
      <TodoForms
        userItem={userItem}
        setUserItem={setUserItem}
        userItems={userItems}
        setUserItems={setUserItems}
      />
      <TodoItems userItems={userItems} setUserItems={setUserItems} />
      <div className={style.interaction}>
        <CheckedTask userItems={userItems} />
        <RemoveChecked userItems={userItems} setUserItems={setUserItems} />
      </div>
    </>
  );
};

export default Todos;
