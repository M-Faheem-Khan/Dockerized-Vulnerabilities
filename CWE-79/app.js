const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    var name = req.query.name;
    console.log(req.originalUrl);
    
    if (name === undefined) {
        res.send(`<p>Hi!<p>`)
    } else {
        res.send(`<p>Hi ${name}<p>`)
    }
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
// EOF