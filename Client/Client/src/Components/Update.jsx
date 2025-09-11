import React from "react";
import { useState } from "react";
import axios from "axios";

const Update = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userid, setuserId] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/getUserId", {
        username: username,
      });
      if (res.data.status == "Success") {
        console.log(res.data.userid);
        try {
          const user_id = res.data.userid;
          setuserId(user_id);
          const res2 = await axios.post("http://localhost:3001/updatePass", {
            userid: user_id,
            newpass: password,
          });
          if (res2.data.status == "Success") {
            setMessage("Your password has been updated !!!");
          } else {
            setMessage("Sorry, your password has not been updated !!!");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setMessage("Sorry the username you entered doesn't exist");
      }
    } catch (error) {
      console.log(error);
      setMessage("🚨 Server Down. Please try again later!");
    }
  }

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        Enter details to update an password
      </h2>
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
          />{" "}
          <br />
          <h2>Enter the new Password for {username}</h2>
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

export default Update;
