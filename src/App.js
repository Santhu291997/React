import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import UserContext from "./utils/Context/UserContext";

function App() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Santhosh",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
