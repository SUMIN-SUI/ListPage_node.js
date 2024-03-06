const express = require("express");
const mysql = require("./mysqlconn");

const router = express.Router();
mysql.connect();

router.get("/", function (request, response) {
  response.render("add");
});

router.post("/", function (request, response) {
  const newId = request.body.id;
  const newTitle = request.body.title;
  const newPublisher = request.body.publisher;
  const newPrice = request.body.price;

  mysql.query(
    "INSERT INTO Book(bookid, bookname, publisher, price) VALUES(?,?,?,?)",
    [newId, newTitle, newPublisher, newPrice],
    function (error, result, fields) {
      if (error) {
        console.log("쿼리 문장에 오류가 있습니다.");
        console.log(error);
      } else {
        response.redirect("/");
      }
    }
  );
});

module.exports = router;
