import axios from "axios";

export const putData = async (itemData) => {
  try {
    await axios.put(`http://localhost:3030/items/${itemData.id}`, itemData);
  } catch (error) {
    throw new Error(error);
  }
};

export const postData = async (newItem) => {
  try {
    const response = await axios.post(`http://localhost:3030/items`, newItem);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteData = async (id) => {
  try {
    await axios.delete(`http://localhost:3030/items/${id}`);

    return { status: true };
  } catch (error) {
    return { status: false, error: error };
  }
};

export const registrationNewUser = async (user) => {
  try {
    const response = await axios.post("http://localhost:3030/users", user);
    localStorage.setItem("isAuthenticated", JSON.stringify(true));
    console.log(["response"], response.data);
  } catch (error) {
    throw new Error(error);
  }
};

export const getUsers = async (verifyUser, formLoginValues) => {
  try {
    const response = await axios.get("http://localhost:3030/users");
    const users = response.data;

    if (users.length === 0) {
      alert("The user is not registered!!!");
      return;
    }

    verifyUser(users, formLoginValues);
  } catch (error) {
    throw new Error(error);
  }
};
