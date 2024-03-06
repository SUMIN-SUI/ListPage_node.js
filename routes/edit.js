const express = require("express");
const mysql = require("./mysqlconn");

const router = express.Router();

router.get("/", function (request, response) {
  response.render("edit");
});

router.get("/:id", function (request, response) {
  mysql.query(
    "SELECT * FROM Book WHERE bookid=?",
    [request.params.id],
    function (error, results) {
      if (!error) {
        response.render("edit", { item: results[0] });
      } else {
        console.log("Error");
      }
    }
  );
});

router.post("/:id", function (request, response) {
  let body = request.body;

  mysql.query(
    "UPDATE Book SET bookname=?, publisher=?, price=? WHERE bookid=?",
    [body.title, body.publisher, body.price, request.params.id],
    function (error, results) {
      if (!error) {
        response.redirect("/");
      } else {
        console.log("Error");
      }
    }
  );
});

module.exports = router;
