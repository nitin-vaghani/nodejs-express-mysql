const express = require("express");
const bodyParser = require("body-parser");


const app = express();


// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/customer.routes.js")(app);

//// create application/json parser
//var jsonParser = bodyParser.json()
// 
//// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
//
//app.post('/test', urlencodedParser, function (req, res) {
//  console.log(req.body)
//});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
