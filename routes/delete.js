const express = require("express");
const mysql = require("./mysqlconn");

const router = express.Router();

router.get("/:id", function (request, response) {
  mysql.query(
    "DELETE FROM Book WHERE bookid=?",
    [request.params.id],
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
