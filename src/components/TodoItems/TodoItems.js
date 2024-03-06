import TodoItem from "../TodoItem/TodoItem";

import style from "./TodoItems.module.css";

const TodoItems = ({ userItems, setUserItems }) => {
  const Items =
    userItems &&
    userItems.map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        setUserData={setUserItems}
        userData={userItems}
        userItems={userItems}
        setUserItems={setUserItems}
      />
    ));

  return <ul className={style.itemsBlock}>{Items}</ul>;
};

export default TodoItems;
