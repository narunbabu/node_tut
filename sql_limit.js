var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodedb"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      }); 

    var sql = "SELECT * FROM customers LIMIT 5";
    // var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    // var sql = "SELECT * FROM customers LIMIT 2, 5";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });