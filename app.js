const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Auto Scaling Demo App </h1> <h4> Message: Success</h4>");
})

app.listen(port, () => {
    console.log('App listening to port ' + port);
})

