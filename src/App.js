import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { auth } from "./firebase.js";
import Navbar from "./components/Navbar.js";
import SignIn from "./components/Signin.js";
import Signup from "./components/Signup.js";
import Dashboard from "./components/Dashboard.js";
import UserContext from "./context/userContext.js";
import RequireAuth from "./components/RequireAuth";
import DetailsPage from "./components/DetailsPage";

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
    <UserContext.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reviews/:id" element={<DetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
