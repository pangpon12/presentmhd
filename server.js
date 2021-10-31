var express=require("express");
var app=express();
var port=process.env.PORT || 3000;
var path    = require("path");
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ข้อมูลการวินิชฉัยโรค"
});


app.get('/employees', (req, res) => {
    db.query("SELECT * FROM memberr", (err, result) => {
        if (err) {
            console.log(err);
        }
        else { res.send(result) };
    });
});


app.use(express.static('public'));


app.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname+'/public/index.html'));

});

app.listen(port);