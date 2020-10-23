const express = require('express');
const router = express.Router();

router.get(/\.html?$/i, function (req, res) {
  var path = req.path;
  var parts = path.split('.');
  parts.pop();
  path = parts.join('.');
  res.redirect(path);
});

router.get(/^\/([^.]+)$/, function (req, res) {
  var path = (req.params[0]);
  res.render(path, function (err, html) {
    if (err) {
      res.render(path + '/index', function (err2, html) {
        if (err2) {
          res.status(404).send(err + '<br>' + err2);
        } else {
          res.end(html);
        }
      })
    } else {
      res.end(html);
    }
  });
});

module.exports = router;
