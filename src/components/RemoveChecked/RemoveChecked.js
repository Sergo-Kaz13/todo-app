import { deleteData } from "../../api";
import style from "./RemoveChecked.module.css";

const RemoveChecked = ({ userItems, setUserItems }) => {
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
