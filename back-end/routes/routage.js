var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/routage', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send([
        {
            "title": "Test",
            "text": "Lorem ipsum dolor sit amet.",
            "author": "Jean du Test",
            "date": "07/10/2019"
        },
        {
            "title": "Test 2",
            "text": "Lorem ipsum dolor sit amet.",
            "author": "Jacques du Test",
            "date": "07/10/2019"
        }
    ])
    res.end();
  });

  

  /*router.post('/routage', function(req, res){
    res.status(404).send;
    res.json({test: "coucou"});
    res.end();
  })*/


module.exports = router;