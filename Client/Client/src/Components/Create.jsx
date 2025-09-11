import React from "react";
import { useState } from "react";
import axios from "axios";
const Create = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/createAcc", {
        username: username,
        password: password,
      });
      console.log(res.data.status);
      if (res.data.status == "Success") {
        setMessage("Your Account has been successfully created");
      } else {
        setMessage("Server Down. Please try again later!");
      }
    } catch (error) {
      console.log("error");
      setMessage("🚨 Server Down. Please try again later!");
    }
  }
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Enter details to create an acc</h2>
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
      <h3>{message && <h2>{message}</h2>}</h3>
    </>
  );
};

export default Create;
