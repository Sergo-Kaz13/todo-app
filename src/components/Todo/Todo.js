import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MyIsAuthenticated } from "../../context/MyIsAuthenticated";

import style from "./Todo.module.css";

const Todo = () => {
  const { userItems, setUserItems } = useContext(MyIsAuthenticated);

  const { id } = useParams();
  const userItem = userItems.find((item) => item.id === id);

  const [inputValue, setInputValue] = useState(userItem.value);

  const handleChengeInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSave = () => {
    setUserItems(
      userItems.map((item) => {
        if (item.id !== userItem.id) {
          return item;
        }
        return { ...item, value: inputValue };
      })
    );
  };

  return (
    <div className={style.blockEdit}>
      <input
        type="text"
        className={style.inputEdit}
        value={inputValue}
        onChange={handleChengeInput}
        autoFocus={true}
      />
      <Link to="/todos" className={style.btnSave} onClick={handleSave}>
        Save
      </Link>
    </div>
  );
};

export default Todo;
