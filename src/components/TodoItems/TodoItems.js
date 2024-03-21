import { useContext } from "react";
import { MyIsAuthenticated } from "../../context/MyIsAuthenticated";
import TodoItem from "../TodoItem/TodoItem";

import style from "./TodoItems.module.css";

const TodoItems = () => {
  const { userItems } = useContext(MyIsAuthenticated);

  const Items =
    userItems &&
    userItems.map((item) => <TodoItem key={item.id} item={item} />);

  return <ul className={style.itemsBlock}>{Items}</ul>;
};

export default TodoItems;
