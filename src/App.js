import { Suspense, lazy, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import useFetch from "./useFetch";

import style from "./App.module.css";
import Menu from "./components/Menu/Menu";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Authentication from "./components/Authentication/Authentication";
import AnonymousRoute from "./components/AnonymousRoute/AnonymousRoute";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Todos = lazy(() => import("./components/Totos/Todos"));
const Todo = lazy(() => import("./components/Todo/Todo"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

function App() {
  const [userItem, setUserItem] = useState("");
  const [userItems, setUserItems] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [toggleAuthentication, setToggleAuthentication] = useState(false);

  const { data, isLoading, error } = useFetch("http://localhost:3030/items");

  useEffect(() => {
    setUserItems(data);
  }, [data]);

  useEffect(() => {
    const isAuthenticated =
      JSON.parse(localStorage.getItem("isAuthenticated")) || false;

    if (isAuthenticated) {
      setIsAuthenticated(isAuthenticated);
    }
  }, [isAuthenticated]);

  if (isLoading) return <p className={style.loader}>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Menu
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <div className={style.wrapper}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/todos"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Todos
                    userItem={userItem}
                    setUserItem={setUserItem}
                    userItems={userItems}
                    setUserItems={setUserItems}
                  />
                </PrivateRoute>
              }
            />
            <Route
              path="/authentication"
              element={
                <AnonymousRoute isAuthenticated={isAuthenticated}>
                  <Authentication
                    toggleAuthentication={toggleAuthentication}
                    setToggleAuthentication={setToggleAuthentication}
                    setIsAuthenticated={setIsAuthenticated}
                  />
                </AnonymousRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/todo/:id"
              element={
                <Todo userItems={userItems} setUserItems={setUserItems} />
              }
            />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
