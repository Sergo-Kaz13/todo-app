import { useContext, useEffect, useState } from "react";
import { MyIsAuthenticated } from "../../context/MyIsAuthenticated";
import style from "./CheckedTask.module.css";

const CheckedTask = () => {
  const { userItems } = useContext(MyIsAuthenticated);

  const [checkedItems, setCheckedItems] = useState(0);
  const [filling, setFilling] = useState(0);
  const scale = {
    background: `linear-gradient(90deg, rgba(150, 227, 74, 1) 0%, rgba(150, 227, 74, 1) ${filling}%, rgba(242, 246, 245, 0) ${filling}%)`,
  };
  const numbersItems = userItems && userItems.length;

  const currentCheckedItems = (userItems) => {
    let checkedItems = 0;
    userItems.forEach((item) => {
      if (item.checked) {
        checkedItems++;
      }
    });

    return checkedItems;
  };

  const calculateFilling = (checkedItems, numbersItems) => {
    if (checkedItems !== 0) {
      return (checkedItems / numbersItems) * 100;
    }
    return 0;
  };

  useEffect(() => {
    setCheckedItems(currentCheckedItems(userItems));
  }, [userItems]);

  useEffect(() => {
    setFilling(calculateFilling(checkedItems, numbersItems));
  }, [numbersItems, checkedItems]);

  return (
    <div className={style.checkedTask} style={scale}>
      <span className={style.checkedItems}>{checkedItems}</span> of{" "}
      <span className={style.numbersItems}>{numbersItems}</span> tasks done
    </div>
  );
};

export default CheckedTask;
