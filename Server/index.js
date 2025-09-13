const express = require("express");
const app = express();
const mongoose = require("mongoose");
const info = require("./models/info_models");
const cors = require("cors"); //cross origin resource sharing
mongoose
  .connect("mongodb://127.0.0.1:27017/auth_prac")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error(err));

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // parse JSON bodies

app.get("/", async (req, res) => {
  const Info_Call = await info.find();
  res.json({ data: Info_Call });
});

app.post("/checkDetails", async (req, res) => {
  const { username, password } = req.body;
  const Info_Call = await info.findOne({
    username: username,
    password: password,
  });

  if (Info_Call) {
    res.json({ status: "Success" });
  } else {
    res.json({ status: "Failed" });
  }
});

app.post("/createAcc", async (req, res) => {
  const { username, password } = req.body;
  const Info_Call = await info.insertOne({
    username: username,
    password: password,
  });
  if (Info_Call) {
    res.json({ status: "Success" });
  } else {
    res.json({ status: "Failed" });
  }
});

app.post("/getUserId", async (req, res) => {
  const { username } = req.body;
  const Info_Call = await info.findOne({
    username: username,
  });
  if (Info_Call) {
    const userid = Info_Call._id.toString();
    res.json({ status: "Success", userid: userid });
  } else {
    res.json({ status: "Failed" });
  }
});

app.post("/updatePass", async (req, res) => {
  const { userid, newpass } = req.body;
  const Info_Call2 = await info.updateOne(
    { _id: userid },
    { $set: { password: newpass } }
  );
  if (Info_Call2) {
    res.json({ status: "Success" });
  } else {
    res.json({ status: "Failed" });
  }
});

app.delete("/deleteUser/:id", async (req, res) => {
  const id = req.params.id;
  // const objectId = new mongoose.Types.ObjectId(id);
  const Info_Call = await info.deleteOne({
    _id: id,
  });
  if (Info_Call.deletedCount == 1) {
    res.json({
      status: "Success",
    });
  } else {
    res.json({
      status: "Failed",
    });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
