import React from "react";
import { useState } from "react";
import axios from "axios";

const Delete = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Clicked");
    try {
      const res = await axios.post("http://localhost:3001/getUserId", {
        username: username,
      });

      if (res.data.status == "Success") {
        const user_id = res.data.userid;
        console.log(res.data.userid);
        try {
          const res2 = await axios.delete(
            `http://localhost:3001/deleteUser/${user_id}`
          );
          if (res2.data.status == "Success") {
            setMessage("Your Account has been successfully deleted");
          } else {
            setMessage("Your Account has been not been deleted");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setMessage("No username found as " + username);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        Enter details to delete your account
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
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <h3>{message && <h2>{message}</h2>}</h3>
    </div>
  );
};

export default Delete;
