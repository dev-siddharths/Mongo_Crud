import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Read from "./Components/Read";
import Create from "./Components/Create";
import Update from "./Components/Update";
import Delete from "./Components/Delete";

function App() {
  return (
    <>
      {/* <Read /> */}
      <Create />
      {/* <Update /> */}
      {/* <Delete /> */}
    </>
  );
}

export default App;
