var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "FTP Express Server!" });
});

router.post("/submit", (req, res, next) => {
  const { username, password } = req.body;
  res.render("success", { username });
});

module.exports = router;
