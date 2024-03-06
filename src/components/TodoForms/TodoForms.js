import { postData } from "../../api";
import style from "./TodoForms.module.css";

const TodoForms = ({ userItem, setUserItem, userItems, setUserItems }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleUserItemChange = (event) => {
    setUserItem(event.target.value);
  };

  const sendUserData = () => {
    const itemTrim = userItem.trim();

    if (itemTrim.length <= 0) {
      alert("Enter text");

      return null;
    }

    const userData = {
      value: userItem,
      checked: false,
    };
    postData(userData).then((res) => setUserItems([...userItems, res.data]));

    setUserItem("");
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.todoInput}
        type="text"
        value={userItem}
        placeholder="what needs to be done?"
        onChange={handleUserItemChange}
      />
      <button onClick={sendUserData} className={style.btnAddItem} type="submit">
        +
      </button>
    </form>
  );
};

export default TodoForms;
