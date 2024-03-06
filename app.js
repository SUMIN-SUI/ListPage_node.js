const express = require("express");
const mysql = require("./routes/mysqlconn");

const app = express();

mysql.connect();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

const mainRouter = require("./routes/main");
const addRouter = require("./routes/add");
const editRouter = require("./routes/edit");
const deleteRouter = require("./routes/delete");

app.use("/", mainRouter);
app.use("/add", addRouter);
app.use("/edit", editRouter);
app.use("/delete", deleteRouter);

app.listen(3000, function () {
  console.log("Server Running at http://127.0.0.1:3000");
});
