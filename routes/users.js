var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  /* get data from client */
  var message = req.body.message

  /* send message to client */
  res.io.emit("hallo", message);

  res.send("success")
});

module.exports = router;
