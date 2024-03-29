import { useContext } from "react";
import { deleteData } from "../../api";
import { MyIsAuthenticated } from "../../context/MyIsAuthenticated";
import style from "./RemoveChecked.module.css";

const RemoveChecked = () => {
  const { userItems, setUserItems } = useContext(MyIsAuthenticated);

  const removeCheckedItems = () => {
    const removeItemId = [];
    userItems.forEach((item) => {
      if (item.checked === true) {
        removeItemId.push(item.id);
      }
    });

    removeItemId.forEach((id) => {
      deleteData(id);
    });

    setUserItems(userItems.filter((item) => item.checked === false));
  };

  return (
    <button className={style.btnRemoveChecked} onClick={removeCheckedItems}>
      Remove checked <span className={style.btnRemoveCheckedMod}>x</span>
    </button>
  );
};

export default RemoveChecked;
