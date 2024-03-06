const express = require("express");
const mysql = require("./mysqlconn");

const router = express.Router();

router.get("/", function (request, response) {
  mysql.query("SELECT * FROM Book", function (error, results) {
    if (!error) {
      response.render("main", { dbData: results });
    } else {
      console.log("Error");
    }
  });
});

module.exports = router;
