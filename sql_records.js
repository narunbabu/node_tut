var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodedb"
});


con.connect(function(err) {
  if (err) throw err;
// con.query("SELECT * FROM customers", function (err, result, fields) {
// con.query("SELECT name, address FROM customers", function (err, result, fields) {
//   con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
//  con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {

// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
// con.query(sql, function (err, result) {  

// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE address = ?';
// con.query(sql, [adr], function (err, result) {

// var name = 'Amy';
// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
// con.query(sql, [name, adr], function (err, result) {

// con.query("SELECT * FROM customers ORDER BY address", function (err, result) {
    // var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
    // con.query(sql, function (err, result) {
    var sql = "DROP TABLE customers";
    con.query(sql, function (err, result) {
        if (err) throw err;
    console.log(result);
    // console.log(fields);
  });
});