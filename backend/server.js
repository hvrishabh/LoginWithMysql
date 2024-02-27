const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

///// for signup
app.post("/signup", (req, res) => {
  const sql = "INSERT INTO login (`name`, `email`, `password` ) VALUES (?) ";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("ERROR in sending data");
    }
    return res.json(data);
  });
});

///// for login
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ? ";
  //   const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("ERROR in sending data");
    }
    if (data.length > 0) {
      return res.json("success");
    } else {
      return res.json("failed");
    }
  });
});

app.listen(8081, () => {
  console.log("listening...signup/login");
});
