import React from "react";
import { useState } from "react";
import axios from "axios";

const Read = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const api_call = await axios.post("http://localhost:3001/checkDetails", {
      username,
      password,
    });
    if (api_call.data.status == "Success") {
      setMessage("Your details match");
    } else {
      setMessage("Sorry your details do not match");
    }
  };
  function messagefunc() {
    if (message.length > 0) {
      return <>{message}</>;
    }
  }
  return (
    <>
      <div className="Ekform">
        <form action="" method="post">
          <input
            type="text"
            name="usern"
            id="usern"
            placeholder="Enter your username"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            name="pass"
            id="pass"
            placeholder="Enter your password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      {messagefunc()}
    </>
  );
};

export default Read;
