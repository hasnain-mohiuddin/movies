import { useEffect, useState } from "react";
import { BrowserRouter, Routes } from "react-router-dom";

import { auth } from "./firebase.js";
import Navbar from "./components/Navbar.js";
import UserContext from "./context/userContext.js";
import { switchRoutes } from "./routes/appRoutes.js";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser({
          uid: userAuth.uid,
          email: userAuth.email,
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Navbar />
        <Routes>{switchRoutes()}</Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
