import { useEffect, useState } from "react";
import { deleteData, putData } from "../../api";
import { Link } from "react-router-dom";

import style from "./TodoItem.module.css";

const TodoItem = ({ item, setUserData, userData, userItems, setUserItems }) => {
  const [itemData, setItemData] = useState(item);
  const [deleteStatus, setDeleteStatus] = useState(false);
  // const [editItem, setEditItem] = useState(true);
  // const [editInput, setEditInput] = useState("");

  const handleCheckboxChange = () => {
    setUserItems(
      userItems.map((item) => {
        if (item.id !== itemData.id) {
          return item;
        }

        item.checked = !itemData.checked;
        return item;
      })
    );
  };

  useEffect(() => {
    putData(itemData);
  }, [userItems, itemData]);

  const removeItem = async (id) => {
    setDeleteStatus(true);
    const status = await deleteData(id);

    setTimeout(() => {
      if (status.status) {
        setUserData(userData.filter((item) => item.id !== id));
      } else {
        alert(status.error);
      }
      setDeleteStatus(false);
    }, 500);
  };

  // const handleEditItem = () => {
  //   setEditItem(false);
  //   setEditInput(itemData.value);
  // };

  // const handleSaveItem = () => {
  //   setEditItem(true);
  // };

  // const saveEditItem = () => {
  //   setItemData({ ...itemData, value: editInput });

  //   console.log(itemData);
  // };

  // const handleChangeInput = (event) => {
  //   setEditInput(event.target.value);
  // };

  return (
    <li className={style.todoItem}>
      <span className={style.contentBlock}>
        <input
          className={style.itemChecked}
          type="checkbox"
          checked={itemData.checked}
          onChange={handleCheckboxChange}
        />
        <span className={style.itemText}>{itemData.value}</span>
      </span>
      <span className={style.btnBlock}>
        <Link
          to={`/todo/${itemData.id}`}
          className={style.btnEdit}
          type="button"
        >
          🖊
        </Link>
        <button
          onClick={() => removeItem(item.id)}
          className={`${style.btnRemove} ${
            deleteStatus ? style.btnRemoveDisabled : ""
          }`}
          type="button"
          disabled={deleteStatus}
        >
          x
        </button>
      </span>
    </li>
  );
};

export default TodoItem;
