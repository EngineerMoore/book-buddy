import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar";
import Inventory from "./components/Inventory";
import SingleBook from "./components/SingleBook";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AccountDetails from "./components/AccountDetails";

const App = () => {
  const [ token, setToken ] = useState("");
  console.log(token)
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/books" element={<Inventory />} />
      <Route path="/books/:bookId" element={<SingleBook />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<Login setToken={setToken}/>} />
      <Route path="/account" element={<AccountDetails token={token}/>} />
      <Route path="/user/rentals" />
    </Routes>
    </>
  )
}
export default App
