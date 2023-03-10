const express = require('express');
const path = require('path')
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    var fpath = req.query.file;
    if (fpath === undefined) {
        var p = path.join(__dirname, 'public','index.html');
        console.log(p);
        res.sendFile(p);
    } else {
        var p = path.join(__dirname, 'public', fpath)
        console.log(p);
        res.sendFile(p);
    }
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})